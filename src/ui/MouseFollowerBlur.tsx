import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollowerBlur: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-[500px] h-[500px] pointer-events-none z-0 
      bg-[radial-gradient(circle,rgba(0,0,0,0.15)_0%,transparent_70%)] 
      dark:bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)]"
      style={{
        borderRadius: "50%",
        filter: "blur(10px)",
        transform: "translate(-50%, -50%)",
        top: 0,
        left: 0,
        position: "fixed",
      }}
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.15,
      }}
    />
  );
};

export default MouseFollowerBlur;
