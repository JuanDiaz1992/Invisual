import React, { useState, useEffect } from "react";

const MAX_SIZE = 500;
const MAX_RADIUS = 200;
const MIN_FONT_SIZE = 12;

const RuedaDeTitulos = ({ activeIndex }) => {
  const titulos = [
    "Window vinil",
    "Floor Vinil",
    "Banners",
    "Custom Signs",
    "Wall Wraps",
  ];

  const [containerWidth, setContainerWidth] = useState(MAX_SIZE);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = Math.min(window.innerWidth * 0.9, MAX_SIZE);
      setContainerWidth(newWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaleFactor = containerWidth / MAX_SIZE;

  const radio = MAX_RADIUS * scaleFactor;
  const viewportSize = MAX_SIZE * scaleFactor;
  const textFontSize = Math.max(18 * scaleFactor, MIN_FONT_SIZE);

  const rotation = activeIndex * (360 / titulos.length);

  return (
    <div style={{ width: "100%", maxWidth: `${MAX_SIZE}px`, margin: "0 auto" }}>
      <div
        style={{
          width: viewportSize,
          height: viewportSize * (180 / 500),
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: viewportSize,
            height: viewportSize,
            transition: "transform 0.6s ease",
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            viewBox={`0 0 ${MAX_SIZE} ${MAX_SIZE}`}
            xmlns="http://www.w3.org/2000/svg"
            width={viewportSize}
            height={viewportSize}
          >
            {titulos.map((titulo, index) => {
              const angle = (index * 360) / titulos.length;
              const id = `path-${index}`;
              const sectorAngle = 360 / titulos.length;

              const startAngle = angle - sectorAngle / 2;
              const endAngle = angle + sectorAngle / 2;
              const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

              const centerX = MAX_SIZE / 2;

              const startX =
                centerX +
                MAX_RADIUS * Math.cos(((startAngle - 90) * Math.PI) / 180);
              const startY =
                centerX +
                MAX_RADIUS * Math.sin(((startAngle - 90) * Math.PI) / 180);
              const endX =
                centerX +
                MAX_RADIUS * Math.cos(((endAngle - 90) * Math.PI) / 180);
              const endY =
                centerX +
                MAX_RADIUS * Math.sin(((endAngle - 90) * Math.PI) / 180);

              const d = `M${startX},${startY} A${MAX_RADIUS},${MAX_RADIUS} 0 ${largeArcFlag},1 ${endX},${endY}`;

              return (
                <React.Fragment key={index}>
                  <path id={id} d={d} fill="none" stroke="none" />
                  <text
                    fill="#000"
                    fontSize={textFontSize}
                    fontWeight="500"
                    textAnchor="middle"
                    style={{ pointerEvents: "none" }}
                  >
                    <textPath
                      href={`#${id}`}
                      startOffset="50%"
                      className="titulo-texto"
                    >
                      {titulo.trim()}
                    </textPath>
                  </text>
                </React.Fragment>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RuedaDeTitulos;
