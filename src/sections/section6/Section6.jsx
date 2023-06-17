import { useRef } from "react";
import usePageInView from "../../hooks/usePageInView";

import "./styles.css";
import "../../aurora.css";

import nodes from "./nodes.svg";
import dot from "./dot.png";

export default function Section6() {
  const ref = useRef(null);
  const inView = usePageInView(ref);

  return (
    <>
      <section id="sec-6">
        <div
          className="topic-container"
          style={{
            opacity: inView ? 0 : 1,
          }}
        >
          <h2>
            Birb is Intelligent <br />
            and Smart
          </h2>
        </div>

        <div
          className="topic-container tc-2"
          style={{
            opacity: inView ? 1 : 0,
          }}
        >
          <h3>
            Powered with <br />
            <span className="und-t">
              Natural Language <br />
              Processing
            </span>
            &nbsp;AI to <br />
            Understand You <br />
            Better
          </h3>

          <div className="tc-img-c">
            <img className="nodes" src={nodes} />
            <img className="dot" src={dot} />
          </div>
        </div>

        <div className="aurora">
          <div className="circle c1" />
          <div className="circle c2" />
          <div className="circle c3" />
          <div className="circle c4" />
          <div className="circle c5" />
          <div className="circle c6" />
        </div>
      </section>

      <div className="dummy" />
      <div className="dummy" ref={ref} />
    </>
  );
}
