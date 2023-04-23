import RobotScene from "../Scenes/RobotScene";
import TypingTitle from "./Typing/index";
import WelcomeText from "./Texts/index";
import Dictaphone from "./Spoke/index";

function Welcome() {
  return (
    <div>
      <RobotScene>
        <TypingTitle />
        <WelcomeText />
        <Dictaphone />
      </RobotScene>
    </div>
  );
}

export default Welcome;
