import React, { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "antd";
import Image, { StaticImageData } from "next/image";

interface Image {
  image: StaticImageData;
  content: string;
}

export type ProjectItem = {
  logo?: StaticImageData;
  logoFont?: string;
  title?: string | ReactNode;
  badges?: string[];
  content?: string | ReactNode;
  description?: string | ReactNode;
  links?: Image[];
  techUsed?: Image[];
};

const Item: React.FC<ProjectItem> = (props) => {
  const {
    logo,
    logoFont,
    title,
    badges,
    content,
    description,
    links,
    techUsed,
  } = props;

  return (
    <div className="px-6 py-6 mx-4 transition-transform duration-300 md:px-0">
      <Fade>
        <div className="px-5 py-5 rounded-lg bg-white text-center hover:z-3 hover:shadow-lg">
          {logo && (
            <Image
              className="mx-auto"
              src={logo}
              width={80}
              height={80}
              alt="logo"
            />
          )}
          {logoFont && <div className="text-6xl">{logoFont}</div>}

          {title && (
            <h4 className="my-4 text-2xl font-bold text-[#002245] text-shadow-[0_1px_1px_rgb(0_34_69_/_32%)]">
              {title}
            </h4>
          )}

          {badges && (
            <div className="flex justify-center mb-2">
              {badges.map((badge) => (
                <Image key={badge} src={badge} height={32} alt="badge" />
              ))}
            </div>
          )}

          {content && (
            <div className="h-auto max-w-full max-h-full box-shadow-[0_5px_15px_0_rgb(0_0_0_/_35%)] cursor-zoom-in">
              {content}
            </div>
          )}

          {description && (
            <div className="mt-4 text-base text-[#151515] letter-spacing-1 text-shadow-[0_1px_1px_#e0e0e0] text-left">
              {description}
            </div>
          )}

          {links && (
            <div className="flex justify-center items-center mb-4 h-12">
              {links.map((link) => (
                <a
                  key={link.content}
                  href={link.content}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-2 h-12 hover:scale-110 transition-transform duration-300"
                >
                  <Image src={link.image} height={38} alt="linkImage" />
                </a>
              ))}
            </div>
          )}

          {techUsed && (
            <div>
              <h4 className="pt-4 pb-3 border-t-[1px] border-[#cacaca] font-bold text-[24px] inline-block w-[80%] text-[#151515]">
                技术栈
              </h4>
              <ul className="flex flex-wrap justify-center">
                {techUsed.map((tech, index) => (
                  <li
                    key={tech.content}
                    style={{ animationDelay: `${index * 300}ms` }}
                    className="my-1 px-2 flex items-center"
                  >
                    <Tooltip placement="top" title={tech.content} color="black">
                      <Image src={tech.image} height={38} alt="techUsed" />
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Item;
