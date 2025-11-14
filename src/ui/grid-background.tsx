import React from "react";
import MouseFollowerBlur from "./MouseFollowerBlur";

export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 h-full w-full 
      bg-white dark:bg-neutral-900
      dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]
      bg-[linear-gradient(to_right,#f5f3f2_1px,transparent_1px),linear-gradient(to_bottom,#f5f3f2_1px,transparent_1px)]
      bg-[size:14px_24px] dark:bg-[size:14px_24px]"
    >
      <MouseFollowerBlur />
    </div>
  );
}
