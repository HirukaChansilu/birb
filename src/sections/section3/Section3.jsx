import { useRef } from "react";

import usePageInView from "../../hooks/usePageInView";
import usePageScrollPercentage from "../../hooks/usePageScrollPercentage";

import "./styles.css";

import iphone from "./iphone.png";

export default function Section3() {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);

  const inView = usePageInView(sectionRef);
  const percentage = usePageScrollPercentage(gradientRef);

  return (
    <section id="sec-3" ref={sectionRef}>
      <div
        className="fixed-text-container"
        style={{
          display: inView ? "flex" : "none",
          top: `${
            percentage < 25
              ? 0
              : percentage >= 75
              ? -100
              : -1 * ((percentage - 25) * 2)
          }%`,
        }}
      >
        <h2
          style={{
            scale: `${
              percentage < 25
                ? 100
                : percentage >= 75
                ? 30
                : 100 - (percentage - 25) * 2
            }%`,
          }}
        >
          Just say “Hey Birb”
        </h2>
      </div>

      <div
        className="gradient-container"
        ref={gradientRef}
        style={{
          scale: `${
            percentage < 25
              ? 100
              : 100 - ((percentage - 25) * 30) / 50 < 70
              ? 70
              : 100 - ((percentage - 25) * 30) / 50
          }%`,
        }}
      >
        <h3>“Hey Birb, How is the Weather today?”</h3>
        <img className="iphone" src={iphone} />
        <div
          className="gradient-cropper"
          style={{
            height: `${
              percentage < 25
                ? 300
                : 300 - ((percentage - 25) * 240) / 45 < 60
                ? 60
                : 300 - ((percentage - 25) * 240) / 45
            }vh`,
            borderRadius: `${
              percentage < 50 ? 0 : ((percentage - 50) * 100) / 50
            }px`,
          }}
        >
          <div className="gradient" />
        </div>
      </div>

      {/* <div className="dummy"></div>
      <div className="dummy"></div> */}
    </section>
  );
}
