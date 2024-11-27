"use client";

import React from "react";
import Title from "@/app/_components/common/title";
import Masonry from "react-masonry-css";
import { projects } from "./constants";
import Item from "./item";

function Project() {
  return (
    <section id="project" className="py-12 px-6 bg-[#170707]">
      <Title tag="h2">个人项目</Title>
      <Title tag="h3">超多好玩、有趣的项目和文章 👻</Title>

      <Masonry
        className="flex"
        columnClassName="bg-clip-padding"
        breakpointCols={{ default: 3, 992: 2, 786: 1 }}
      >
        {projects.map((project, index) => (
          <Item {...project} key={index} />
        ))}
      </Masonry>

      <Title className="mt-15" tag="h3">
        更多好玩、有趣的项目和文章正在路上 🐒
      </Title>
    </section>
  );
}

export default Project;
