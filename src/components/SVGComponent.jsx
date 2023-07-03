import React, { useRef, useEffect } from "react";

export default function SVGComponent() {
  const svgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const svg = svgRef.current;
      const svgRect = svg.getBoundingClientRect();
      const centerX = svgRect.left + svgRect.width / 2;
      const centerY = svgRect.top + svgRect.height / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const offsetX = mouseX - centerX;
      const offsetY = mouseY - centerY;

      const rotateX = offsetY / 10; // Adjust the rotation factor for desired effect
      const rotateY = -offsetX / 10; // Adjust the rotation factor for desired effect

      svg.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="mx-auto w-2/6 h-2/6"
      fill="rgb(156 163 175)"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
    </svg>
  );
}
