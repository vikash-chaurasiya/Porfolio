import React from "react";
import { SiNextdotjs } from "react-icons/si";

const Services = () => {
  return (
    <>
      <div id="services" className=" service-main">
        <div class="container  ">
          <h1 class="sub-tittle">My services</h1>
          <div class="services-list">
            <div>
              <i class="fas fa-code"></i>
              <h2>Frontend Developer</h2>
              <p>
                Passionate Frontend Developer with 1+ years of React.js
                experience at Freeskout. Skilled in creating efficient, visually
                appealing web interfaces.
              </p>
              <a href="#" className="learnMore">
                learn more
              </a>
            </div>
            <div>
              <i class="fab fa-react"></i>
              <h2>React.js</h2>
              <p>
                Passionate about React.js, I specialize in building dynamic and
                interactive web applications. With hands-on experience and a
                strong understanding of React's component-based architecture.
              </p>
              <a href="#" className="learnMore">
                Learn more
              </a>
            </div>

            <div>
              <SiNextdotjs size={50} className="nextIcon" />
              <h2>Next Js</h2>
              <p>
                Passionate about Next.js, I build powerful, SEO-friendly web
                apps. With hands-on experience and deep knowledge of Next.js's
                server-side rendering.
              </p>
              <a href="#" className="learnMore">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
