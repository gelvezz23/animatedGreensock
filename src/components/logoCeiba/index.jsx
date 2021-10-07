import React, { useRef, useEffect } from "react";
import TextContent from "../textContent";
import Logo from "./../../assets/images/logoCeibaSoftware-horizontal-1.png";
import "./styles.scss";
import { gsap, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

function LogoCeiba() {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = gsap.timeline();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
  });

  return (
    <div class="main">
      <div class="container" ref={(el) => (container = el)}>
        <div className="img-container">
          <TextContent />
          <img
            ref={(el) => {
              image = el;
            }}
            src={Logo}
            alt="logo de ceiba"
          />
        </div>
      </div>
    </div>
  );
}

export default LogoCeiba;
