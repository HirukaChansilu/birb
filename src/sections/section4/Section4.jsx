import { useEffect, useRef } from "react";
import usePageInView from "../../hooks/usePageInView";

import "./styles.css";

import netflix from "./netflix.mp4";
import room from "./room.jpg";

export default function Section4() {
  const sectionRef = useRef(null);
  const inView = usePageInView(sectionRef);

  useEffect(() => {
    const nrc = document.getElementById("nrc");
    const netflixVideo = document.getElementById("netflix");

    if (inView) {
      document.getElementById("media-container").style.opacity = 0;
      document.getElementById("sec-4").style.opacity = 1;

      netflixVideo.currentTime = 0;
      netflixVideo.play();

      nrc.dataset.timeout = setTimeout(() => {
        nrc.style.scale = "100%";
      }, 6850);
    } else {
      clearTimeout(nrc.dataset.timeout);

      document.getElementById("sec-4").style.opacity = 0;
      document.getElementById("media-container").style.opacity = 1;
      nrc.style.scale = "var(--scale-nrc)";
    }
  }, [inView]);

  return (
    <>
      <section id="sec-4">
        <div
          className="netflix-container"
          id="nrc"
          style={{ display: inView ? "block" : "none" }}
        >
          <video className="netflix-video" id="netflix" src={netflix} />

          <div
            className="netflix-room-container"
            style={{ backgroundImage: `url(${room})` }}
          ></div>
        </div>
      </section>
      <div className="dummy bg-dark" ref={sectionRef} />
    </>
  );
}
