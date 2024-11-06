"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dots = matrixRef.current?.querySelectorAll(".dot");
    let index = 0;

    if (dots) {
      const interval = setInterval(() => {
        dots[index]?.classList.add("fade-in");
        index = (index + 1) % dots.length;
      }, 1000 / animationSpeed);

      return () => clearInterval(interval);
    }
  }, [animationSpeed]);

  const dotMatrixStyle = {
    "--dot-size": `${dotSize}px`,
    "--dot-opacity": `${opacities.join(",")}`,
    "--color-r": colors[0][0],
    "--color-g": colors[0][1],
    "--color-b": colors[0][2],
  } as React.CSSProperties;

  return (
    <div className={cn("h-full relative w-full", containerClassName)}>
      <div ref={matrixRef} style={dotMatrixStyle} className="dot-matrix">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="dot" />
        ))}
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

// Add CSS styles to control dot animations and appearance
const styles = `
.dot-matrix {
  display: grid;
  grid-template-columns: repeat(10, var(--dot-size));
  gap: var(--dot-size);
}
.dot {
  width: var(--dot-size);
  height: var(--dot-size);
  background-color: rgba(var(--color-r), var(--color-g), var(--color-b), 0.2);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.dot.fade-in {
  opacity: 1;
}
`;
export default CanvasRevealEffect;
