import { useEffect, useRef, useState } from "react";
import usePageInView from "../../hooks/usePageInView";

import "./styles.css";

import birbNest from "./birbNest.png";
import birbHome from "./birbHome.png";
import birbPro from "./birbPro.png";
import birbView from "./birbView.png";

export default function Section5() {
  const [activeCard, setActiveCard] = useState(0);

  const d1 = useRef(null);
  const d2 = useRef(null);
  const d3 = useRef(null);
  const d4 = useRef(null);

  const d1View = usePageInView(d1);
  const d2View = usePageInView(d2);
  const d3View = usePageInView(d3);
  const d4View = usePageInView(d4);

  useEffect(() => {
    if (d4View) {
      setActiveCard(3);
    } else if (d3View) {
      setActiveCard(2);
    } else if (d2View) {
      setActiveCard(1);
    } else {
      setActiveCard(0);
    }
  }, [d1View, d2View, d3View, d4View]);

  return (
    <>
      <section id="sec-5">
        <h2>
          Make Birb a <br />
          Part of Your <br />
          Home
        </h2>

        <div
          className="device-card"
          style={{ right: activeCard === 0 ? "2%" : "-100%" }}
        >
          <h3>Birb Nest</h3>
          <p>Control IOT Devices with ease. Minimal Size. Install Anywhere.</p>
          <div className="card-flex">
            <span>Rs. 12 500</span>
            {/* TODO: LINK */}
            <a href="https://amazon.com/">Buy Now</a>
          </div>
        </div>

        <div
          className="device-card"
          style={{ right: activeCard === 1 ? "2%" : "-100%" }}
        >
          <h3>Birb Home</h3>
          <p>
            Control IOT Devices with ease. Surround sounds technology. Better
            Audio.
          </p>
          <div className="card-flex">
            <span>Rs. 18 000</span>
            {/* TODO: LINK */}
            <a href="https://amazon.com/">Buy Now</a>
          </div>
        </div>

        <div
          className="device-card"
          style={{ right: activeCard === 2 ? "2%" : "-100%" }}
        >
          <h3>Birb Home Pro</h3>
          <p>
            Loud Sounds. Dolby Atmos Technology. Control IOT Devices with ease.
            Audio.
          </p>
          <div className="card-flex">
            <span>Rs. 25 000</span>
            {/* TODO: LINK */}
            <a href="https://amazon.com/">Buy Now</a>
          </div>
        </div>

        <div
          className="device-card"
          style={{ right: activeCard === 3 ? "2%" : "-100%" }}
        >
          <h3>Birb Home View</h3>
          <p>
            Control Your Home. Stream Music and Videos Directly. Face
            Identification Features.
          </p>
          <div className="card-flex">
            <span>Rs. 30 200</span>
            {/* TODO: LINK */}
            <a href="https://amazon.com/">Buy Now</a>
          </div>
        </div>

        <div
          className="device-image"
          style={{
            backgroundImage: `url(${birbNest})`,
            opacity: activeCard === 0 ? 1 : 0,
          }}
        />

        <div
          className="device-image"
          style={{
            backgroundImage: `url(${birbHome})`,
            opacity: activeCard === 1 ? 1 : 0,
          }}
        />

        <div
          className="device-image"
          style={{
            backgroundImage: `url(${birbPro})`,
            opacity: activeCard === 2 ? 1 : 0,
          }}
        />

        <div
          className="device-image"
          style={{
            backgroundImage: `url(${birbView})`,
            opacity: activeCard === 3 ? 1 : 0,
          }}
        />
      </section>

      <div className="dummy" ref={d1} />
      <div className="dummy" ref={d2} />
      <div className="dummy" ref={d3} />
      <div className="dummy" ref={d4} />
    </>
  );
}
