import React from "react";
import Title from "@/app/_components/common/title";
import Profile from "./profile";
import Life from "./life";

function About() {
  return (
    <section
      id="about"
      className="w-screen box-border px-6 py-20 transform translate-z-0 text-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/svgs/about-bg.svg')",
      }}
    >
      <Title tag="h2">关于自己</Title>

      <Title tag="h3">👋，我是 yingjieweb 👻</Title>

      <Profile />

      <Life />
    </section>
  );
}

export default About;
