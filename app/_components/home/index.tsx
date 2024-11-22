"use client";

import useLottie from "@/app/hooks/useLottie";
import useTyped from "@/app/hooks/useTyped";
import { Col, Row } from "antd";
import React from "react";
import { Fade } from "react-awesome-reveal";
import dragonLottieData from "@/public/assets/lotties/dragon.json";
import arrowLottieData from "@/public/assets/lotties/arrow.json";

const introStrings = ["聊聊技术。", "写写博客。", "打打台球。"];

function Home() {
  const typedElement = useTyped(introStrings, { loop: true });
  const dragonLottieRef = useLottie(dragonLottieData);
  const arrowDownLottieRef = useLottie(arrowLottieData);

  const scrollToAbout = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen px-6 pt-14 pb-12 bg-white flex justify-center relative transform translate-z-0"
      style={{
        backgroundImage: "url('/assets/svgs/home-bg.svg')",
      }}
    >
      <Row className="w-full max-w-[1200px] h-4/5 flex flex-wrap justify-center">
        <Col
          span={24}
          md={15}
          className="pt-[1vh] pl-[1vh] text-[2em]
                     sm:pt-[5vh] sm:pl-[5vh] sm:text-[2.5em]
                     md:pt-[7vh] md:pl-[7vh] md:text-[3em]
                     lg:pt-[9vh] lg:pl-[9vh] lg:text-[4em]
                     font-semibold text-[#002245]"
        >
          <p>👋 我是 Yingjieweb，</p>
          <p>一名前端爱好者 🤩，</p>
          <p>
            在<span className="text-[#fdd000]"> 搜 狐 </span> &
            <span className="text-[#FD3333]"> 满 帮 </span> 🧱，
          </p>
          <p>
            ✍ <span className="text-[#61dafb]"> React </span>
            <span className="text-[#40B883]"> Vue</span>，
          </p>
          <p>
            正在学习 <span className="text-[#000000]"> Next.js </span> 🧐
          </p>
          <p>
            偶尔
            <span
              className="[&_.typed-cursor]:text-[#409eff]"
              ref={typedElement}
            />
          </p>
        </Col>
        <Col span={24} md={9} className="py-3 flex items-center justify-center">
          <Fade direction="up">
            <div
              className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[340px] lg:h-[340px] rounded-full
                        relative before:content-[''] before:absolute 
                        before:inset-0 before:w-full before:h-full
                        before:border-4 before:border-[#8cc5ff] 
                        before:rounded-full before:bg-transparent"
            >
              <div
                ref={dragonLottieRef}
                className="w-full h-full rounded-full overflow-hidden"
              />
            </div>
          </Fade>
        </Col>
      </Row>

      <div className="absolute left-1/2 bottom-[2vh] transform -translate-x-1/2">
        <Fade direction="up">
          <div
            className="h-[120px] w-[120px] cursor-pointer relative after:absolute after:inset-0 
                    after:bg-[#8cc5ff] after:rounded-full after:opacity-0 after:transition-all
                    hover:after:opacity-20 hover:after:scale-110"
            onClick={scrollToAbout}
          >
            <div ref={arrowDownLottieRef} />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Home;
