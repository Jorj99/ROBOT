import { useState } from "react";
import Typewriter from "typewriter-effect";

function TypingTitle() {
  // The TextArray:
  const textArray = [
    "Hey, I'm Jorj.",
    "I am a web developer.",
    "I Love to Develop.",
  ];

  const [textIndex, setTextIndex] = useState(0);

  const intervalID = setInterval(() => {
    if (textArray.length > textIndex) {
      setTextIndex((prev) => prev + 1);
    } else {
      clearInterval(intervalID);
    }
  }, 2000);

  return (
    <>
      <span className="my-[3%] text-[#813e5f] tracking-widest	text-6xl p-[0px] flex items-center">
        ........
      </span>
      <Typewriter
        options={{
          strings: textArray,
          autoStart: true,
          loop: true,
        }}
      />
      <span className="my-[3%] text-[#813e5f] tracking-widest	text-6xl p-[0px] flex items-center">
        ........
      </span>
    </>
  );
}

export default TypingTitle;
