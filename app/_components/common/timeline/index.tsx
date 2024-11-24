import React from "react";

type IPropsType = {
  children: React.ReactNode;
};

function Timeline(props: IPropsType) {
  const { children } = props;

  return <div className="flex flex-col my-16">{children}</div>;
}

export default Timeline;
