import React from "react";
import classNames from "classnames";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  ...restProps
}) => (
  <p
    className={classNames(
      "text-white leading-relaxed text-shadow [text-shadow:0_1.5px_4px_#000]",
      className
    )}
    {...restProps}
  >
    {children}
  </p>
);

export default Paragraph;
