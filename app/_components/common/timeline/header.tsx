import React from "react";

interface IProps {
  children: React.ReactNode;
}

function TimelineHeader({ children }: IProps) {
  return (
    <header className="mx-auto min-w-[4em] max-w-[8em] text-center normal-wrap">
      <span
        className="
          h-8 px-3
          rounded bg-[#409eff]
          text-base font-bold text-white
          pointer-events-none
          inline-flex items-center justify-center
        "
      >
        {children}
      </span>
    </header>
  );
}

export default TimelineHeader;
