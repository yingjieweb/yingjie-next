"use client";

import React, { AllHTMLAttributes, createElement } from "react";
import classNames from "classnames";
import { Fade } from "react-awesome-reveal";
interface IProps extends AllHTMLAttributes<HTMLDivElement> {
  tag: "h1" | "h2" | "h3";
}

function Title(props: IProps) {
  const { tag, children, className, ...restProps } = props;

  return (
    <Fade direction="up">
      <div
        {...restProps}
        className={classNames(
          "text-center text-white",
          "font-bold leading-[42px]",
          tag === "h2" && "text-[48px] mb-6",
          tag === "h3" && "text-[24px] mb-4",
          "[text-shadow:0_1.5px_4px_#000]",
          className
        )}
      >
        {createElement(tag, null, children)}
      </div>
    </Fade>
  );
}

export default Title;
