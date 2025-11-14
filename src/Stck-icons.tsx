import React from "react";
import { FaReact, FaJsSquare, FaJava, FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const StackIconsComponent: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center">
      <FaReact
        className="text-sky-400 text-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        title="React"
      />
      <FaJsSquare
        className="text-yellow-400 text-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        title="JavaScript"
      />
      <FaJava
        className="text-red-500 text-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        title="Java"
      />
      <FaCss3Alt
        className="text-blue-500 text-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        title="CSS"
      />
      <SiTypescript
        className="text-blue-400 text-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        title="TypeScript"
      />
    </div>
  );
};

export default StackIconsComponent;
