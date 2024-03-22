import  { useRef } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg";
import "./Herosection.css";


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
          width: "30%", // Width accommodating all images
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
        <img src={img10} alt="Hero 10" style={{ width: "100%" }} />
        <img src={img11} alt="Hero 11" style={{ width: "100%" }} />
        <img src={img12} alt="Hero 12" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
