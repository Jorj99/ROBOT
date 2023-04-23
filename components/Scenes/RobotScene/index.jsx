import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function RobotScene({ width, height, children }) {
  const canvasRef = useRef();

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Sizes
    const sizes = {
      width: width || window.innerWidth,
      height: height || window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );

    camera.position.z = 60;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);

    let mouseX = 0;
    let mouseY = 0;

    function onMouseMove(event) {
      // Get normalized mouse position (-1 to +1)
      mouseX = (event.clientX / sizes.width) * 2 - 0.5;
      mouseY = -(event.clientY / sizes.height) * 2 + 1;
    }
    // Load the GLTF model
    const modelPath = `/models/robot/scene.gltf`;
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        // eslint-disable-next-line no-param-reassign
        gltf.scene.rotation.y = THREE.MathUtils.degToRad(-22);
        // eslint-disable-next-line no-param-reassign
        gltf.scene.rotation.x = THREE.MathUtils.degToRad(2);

        // Create an object group for the model and add it to the scene
        const modelGroup = new THREE.Group();
        modelGroup.position.set(10, -15, 0);
        modelGroup.add(gltf.scene);
        scene.add(modelGroup);

        // Lights
        const ambientLight = new THREE.AmbientLight(0x95d399, 0.9);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xff5697, 2);
        directionalLight2.position.set(-2, 1, 1);
        scene.add(directionalLight2);

        const spotLight = new THREE.SpotLight(0xffffff, 1, 20, Math.PI / 4);
        spotLight.position.set(0, 0, 10);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 0.1;
        spotLight.shadow.camera.far = 1000;
        spotLight.shadow.camera.fov = 30;
        scene.add(spotLight);

        // Set the position of the spotLight relative to the lightsGroup
        spotLight.position.set(30, 0, 10);

        // Add event listener for mouse movement
        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
          // Rotate the model towards the mouse
          modelGroup.rotation.y = mouseX * Math.PI * 0.075;
          modelGroup.rotation.x = -(mouseY * Math.PI * 0.035);

          // controls.update();
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };

        animate();
      },
      (progress) => {
        console.log(`${(progress.loaded / progress.total) * 100}% loaded`);
      },
      (error) => {
        console.log(error);
      }
    );

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="container">
        <div className="absolute w-fit  max-w-[20vw] min-w-[20vw] mt-[10%]">
          {children}
        </div>
        <canvas ref={canvasRef} className="webgl" />
      </div>
    </div>
  );
}

export default RobotScene;
