import { useRef } from "react";
import useObjectInView from "../../hooks/useObjectInView";

import usePageExiting from "../../hooks/usePageExiting";

import "./styles.css";

import coffee from "./coffee.png";
import echodot from "./echodot.png";
import iphone from "./iphone.png";
import leaves from "./leaves.png";
import macbook from "./macbook.png";

import iwatchbg from "./iwatch-bg.png";
import iwatchfg from "./iwatch-fg.png";
import usePageScrollPercentage from "../../hooks/usePageScrollPercentage";

export default function Section2() {
  const containerRef = useRef(null);
  const fixedPageRef = useRef(null);
  const percentageRef = useRef(null);

  const containerVisible = useObjectInView(containerRef);
  const fixedPageState = usePageExiting(fixedPageRef);
  const pagePercentage = usePageScrollPercentage(percentageRef);

  return (
    <>
      <section id="sec-2" ref={fixedPageRef}>
        <div
          className={`fixed-container ${
            fixedPageState && "fixed-container-active"
          }`}
        >
          <div className="text-container" ref={containerRef}>
            <h2>
              <span
                className="fade-text"
                style={{
                  opacity: `${pagePercentage > 80 ? 0 : 1}`,
                  display: `${pagePercentage > 95 ? "none" : "inline-block"}`,
                }}
              >
                Meet the
              </span>
              <span className="gradient-text birb-static">Birb</span>
              <span
                className="gradient-text birb-moving"
                style={{ right: `${pagePercentage > 90 ? 68.3 : 0}%` }}
              >
                Birb
              </span>
              <span
                className="fade-text anytime-text"
                style={{
                  display: `${pagePercentage < 95 ? "none" : "inline-block"}`,
                  opacity: `${pagePercentage < 100 ? 0 : 1}`,
                }}
              >
                Anytime
              </span>
            </h2>
            <p style={{ opacity: `${100 - pagePercentage}%` }}>
              Your own Personal AI Powered Assistant with a huge potential to
              help you with your day-to-day life.
            </p>
          </div>

          <div
            className="iwatch-container"
            style={{ left: `${50 + pagePercentage / 2}%` }}
          >
            <img
              src={iwatchfg}
              id="ifw-0"
              className={`image-fragment ${
                containerVisible && "image-fragment-active"
              }`}
            />
            <img
              src={iwatchbg}
              id="ifw-1"
              className={`image-fragment ${
                containerVisible && "image-fragment-active"
              }`}
            />
          </div>
        </div>

        <div className="fragments-container">
          <img
            src={coffee}
            id="if-0"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
          <img
            src={echodot}
            id="if-1"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
          <img
            src={iphone}
            id="if-2"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
          <img
            src={leaves}
            id="if-3"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
          <img
            src={macbook}
            id="if-4"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
        </div>
      </section>
      <section ref={percentageRef}></section>
    </>
  );
}
