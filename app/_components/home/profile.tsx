"use client";

import { Col, Row } from "antd";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import avatar from "@/public/assets/images/avatar.jpg";
import Paragraph from "@/app/_components/common/paragraph";
import Highlight from "@/app/_components/common/highlight";
import useLottie from "@/app/hooks/useLottie";

const cubeLottie =
  "https://assets9.lottiefiles.com/private_files/lf30_ijlzmjq6.json";

function Profile() {
  const cubeRef = useLottie(cubeLottie);

  return (
    <Row gutter={36} className="flex flex-col justify-center">
      <Col span={24}>
        <Fade direction="up">
          <Image
            className="!w-[300px] !h-[300px] rounded-full shadow-profile object-cover mx-auto mb-5"
            src={avatar}
            alt="头像"
          />
        </Fade>

        <Fade direction="up">
          <Paragraph>
            一名 <Highlight>前端爱好者</Highlight> ，山东烟台人。 目前在{" "}
            <Highlight>搜狐 @ 北京</Highlight> &{" "}
            <Highlight>满帮 @ 南京</Highlight> 从事前端开发 🧱
          </Paragraph>
          <Paragraph>
            本科就读于省内的 <Highlight>曲阜师范大学 @ 济宁</Highlight>{" "}
            软件工程专业 。大学期间，参加过学校的{" "}
            <Highlight>国旗护卫队</Highlight> 🇨🇳
            ，担任过新生军训教官，后悔没去当兵历练一下 😕。
          </Paragraph>
          <Paragraph>
            毕业之后去 <Highlight>东北大学 @ 沈阳</Highlight> 读了 3
            年研究生。相比后端和算法，个人感觉还是{" "}
            <Highlight>更喜欢前端</Highlight>
            ，觉得做喜欢的事情是不会有错的 🤔
          </Paragraph>
        </Fade>

        <div className="w-[300px] h-[300px] mx-auto" ref={cubeRef} />

        <Fade direction="up">
          <Paragraph>
            平时除了喜欢写点代码之外，还喜欢和小伙伴们打打篮球 🏀 ，健健身 🏋
            ...
          </Paragraph>
          <Paragraph>
            小时候的梦想是当宇航员
            👨‍🚀，当下这个年纪好像没什么大的梦想，而是一个个阶段性的{" "}
            <Highlight>小目标</Highlight> 🌟
          </Paragraph>
          <Paragraph>希望自己能不忘初心，踏踏实实学点前端 🤔</Paragraph>
          <Paragraph>
            持续学习前端知识 🎯，争取三到五年能够成为一名{" "}
            <Highlight>高级前端工程师</Highlight>！👷
          </Paragraph>
        </Fade>
      </Col>
    </Row>
  );
}

export default Profile;
