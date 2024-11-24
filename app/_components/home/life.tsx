"use client";

import React from "react";
import Image from "next/image";
import Timeline from "@/app/_components/common/timeline";
import TimelineHeader from "@/app/_components/common/timeline/header";
import TimelineItem from "@/app/_components/common/timeline/item";
import Highlight from "@/app/_components/common/highlight";
import qfnu from "@/public/assets/icons/qfnu.png";
import neu from "@/public/assets/icons/neu.png";
import sohu from "@/public/assets/icons/sohu.png";
import fta from "@/public/assets/icons/fta.png";
import useTyped from "@/app/hooks/useTyped";

const strings = ["码农", "打工人", "程序员", "工程师", "前端开发"];

function Life() {
  const el = useTyped(strings, { loop: true });

  return (
    <Timeline>
      <TimelineHeader>1995</TimelineHeader>
      <TimelineItem direction="right" time="9月" header="👶🏻" />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header="🙇‍♂️ 好好学习..." />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={["🎓 本科毕业 🎉"]}
        node={
          <span className="text-2xl">
            <Image width={46} src={qfnu} alt="qfnu" />
          </span>
        }
        content={[
          "济宁，山东",
          <span key="qfnu">
            <Highlight>曲阜师范大学</Highlight> @ 软件工程
          </span>,
          "最初写 C 和 Java，慢慢转写 JavaScript，前端真好玩！",
        ]}
      />
      <TimelineItem
        time="9月"
        node={
          <span className="text-2xl">
            <Image width={72} src={neu} alt="neu" />
          </span>
        }
        header={[
          "✈️ 沈阳",
          <span key="neu">
            研究生入学 <Highlight>东北大学</Highlight>
          </span>,
        ]}
        content={["在校学人工智能，自己搞前端、秋招刷题... 面试..."]}
      />
      <TimelineItem
        direction="right"
        time="6月"
        header={["🎓 研究生毕业 🎉"]}
        content={["大数据分析与人工智能实验室 @ 人工智能"]}
      />
      <TimelineItem
        time="7月"
        node={
          <span className="text-2xl">
            <Image width={70} src={sohu} alt="sohu" />
          </span>
        }
        header={[
          "海淀，北京",
          <span className="whitespace-nowrap" key="sohu">
            入职 <Highlight>@搜狐</Highlight> 🦊
            <span className="text-[#8CC5FF]" />
          </span>,
        ]}
      />
      <TimelineHeader>2023</TimelineHeader>
      <TimelineItem
        direction="right"
        time="9月"
        node={
          <span className="text-2xl">
            <Image width={70} src={fta} alt="FTA" />
          </span>
        }
        header={[
          "南京，江苏",
          <span className="whitespace-nowrap" key="fta">
            入职 <Highlight>@满帮</Highlight> 🚚 {" "}
            <span className="text-[#8CC5FF]" ref={el} />
          </span>,
        ]}
        content={["和女朋友结束异地恋啦！🎉"]}
      />
      <TimelineHeader>🤔...</TimelineHeader>
    </Timeline>
  );
}

export default Life;
