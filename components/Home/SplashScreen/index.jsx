import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

function SplashScreen() {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter_splash_screen");

    typewriter
      .pasteString(
        `<p style="display: flex;">
            <span style="color: #18d15975;
            font-weight: bold;">jorj_hambaryan</span>
            <span style="color: #ffffff91;"> :</span>
            <span style="color: #0000ffb5;
            font-weight: bold;">~THREE</span>
            <span style="color: #ffffff91;">$</span>
        </p>`
      )
      .typeString(`<pre style="color: #ffffff91;"> npm run start</pre>`)
      .pauseFor(2500)
      .pasteString(
        `<div><p style="color: #ffffff91;"> &#10093 next start</p></div>`
      )
      .pauseFor(30)
      .pasteString(
        `<div style="display: flex;"><p style="color: #18d15975;
        font-weight: bold;"> ready </p><p style="color: #ffffff91;">- started server on 0.0.0.0:3000, url: http://localhost:3000</p></div>`
      )
      .pauseFor(300)
      .pasteString(
        `<div style="display: flex;"><p style="color: #c71f1f;
        font-weight: bold;">Error: </p><p style="color: #ffffff91;">Unhandled Runtime Error</p></div>`
      )
      .pauseFor(0)
      .pasteString(
        `<span style="display: flex;">
            <p style="color: #18d15975;
            font-weight: bold;">jorj_hambaryan</p>
            <p style="color: #ffffff91;"> :</p>
            <p style="color: #0000ffb5;
            font-weight: bold;">~THREE</p>
            <p style="color: #ffffff91;">$</p>
        </span>`
      )
      .pauseFor(200)
      .typeString(`<p style="color: #ffffff91;">npm run start</p>`)
      .pauseFor(2500)
      .pasteString(
        `<div><p style="color: #ffffff91;"> &#10093 next start</p></div>`
      )
      .pauseFor(30)
      .pasteString(
        `<div style="display: flex;"><p style="color: #18d15975;
        font-weight: bold;"> ready </p><p style="color: #ffffff91;">- started server on 0.0.0.0:3000, url: http://localhost:3000</p></div>`
      )
      .pauseFor(300)
      .pasteString(
        `<div style="display: flex;"><p style="color: #c71f1f;
        font-weight: bold;">Error: </p><p style="color: #ffffff91;">Unhandled Runtime Error</p></div>`
      )
      .pauseFor(0)
      .pasteString(
        `<p style="display: flex;">
                <span style="color: #18d15975;
                font-weight: bold;">jorj_hambaryan</span>
                <span style="color: #ffffff91;"> :</span>
                <span style="color: #0000ffb5;
                font-weight: bold;">~THREE</span>
                <span style="color: #ffffff91;">$</span>
        </p>`
      )
      .pauseFor(200)
      .typeString(`<pre style="color: #ffffff91;"> npm run start</pre>`)
      .pauseFor(50)
      .deleteChars(5)
      .pauseFor(10)
      .typeString(`<pre style="color: #ffffff91;"> dev</pre>`)
      .pauseFor(150)
      .pasteString(
        `<div><p style="color: #ffffff91;"> &#10093 next start</p></div>`
      )
      .pauseFor(30)
      .pasteString(
        `<div style="display: flex;"><p style="color: #18d15975;
        font-weight: bold;"> ready </p><p style="color: #ffffff91;">- started server on 0.0.0.0:3000, url: http://localhost:3000</p></div>`
      )
      .pauseFor(10)
      .pasteString(
        `<div style="display: flex;"><p style="color: #0debfc78;
        font-weight: bold;">  info </p><p style="color: #ffffff91;">  - SWC minify release candidate enabled. https://nextjs.link/swcmin</p></div>`
      )

      .start();
  }, []);

  return <div id="typewriter_splash_screen" />;
}

export default SplashScreen;
