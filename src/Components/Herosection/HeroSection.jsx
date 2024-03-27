import { useRef } from "react";
import "./Herosection.css";

// Import images dynamically
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";

export default function HeroSection() {
  const containerRef = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        margin: "0",
        padding: "0",
        position: "relative",
        userSelect: "none",
        backgroundColor: "#f0f0f0", // Set background color for the hero section
        overflow: "hidden" // Hide overflow to create the scrolling effect
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          width: "100%", // Width accommodating all images
          animation: "scrollAnimation 15s linear infinite" // Scroll animation
        }}
      >
        {/* Render the images */}
        <img src={img1} alt="Hero 1" style={{ width: "100%" }} />
        <img src={img2} alt="Hero 2" style={{ width: "100%" }} />
        <img src={img3} alt="Hero 3" style={{ width: "100%" }} />
        <img src={img4} alt="Hero 4" style={{ width: "100%" }} />
        <img src={img5} alt="Hero 5" style={{ width: "100%" }} />
        <img src={img6} alt="Hero 6" style={{ width: "100%" }} />
        <img src={img7} alt="Hero 7" style={{ width: "100%" }} />
        <img src={img8} alt="Hero 8" style={{ width: "100%" }} />
        <img src={img9} alt="Hero 9" style={{ width: "100%" }} />
      </div>
    </div>
  );
}