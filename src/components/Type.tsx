"use client"
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "New Graduate Student",
          "Data Enthusiast",
          "Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "text-3xl text-blue-700",
        cursorClassName: "text-3xl"
      }}
    />
  );
}

export default Type;