import React from "react";
import ReactTooltip from "react-tooltip";
import { SiCss3, SiGit, SiHtml5, SiJavascript, SiJest, SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skillicon = () => {
  return (
    <>
      <div className="skills-icon">
        <ReactTooltip/>
        <div data-tip="React.Js">
          <FaReact />
        </div>
        <div data-tip="Next.Js">
          <SiNextdotjs />
        </div>
        <div data-tip="Redux">
          <SiRedux/>
        </div>
        <div data-tip='JavaScript'>
          <SiJavascript size={46}/>
        </div>
        <div data-tip="TypeScript">
          <SiTypescript size={46}/>
        </div>
        <div data-tip="Jest"><SiJest/></div>
        <div data-tip="Css">
          <SiCss3/>
        </div>
        <div data-tip="HTML">
          <SiHtml5/>
        </div>
        <div>
          <SiGit/>
        </div>
      </div>
    </>
  );
};

export default Skillicon;
