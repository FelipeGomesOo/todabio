import React from "react";
import { interpolateColors } from "@/lib/utils";

interface ColorBoxProps {
  colors: string[];
}

const ColorBox: React.FC<ColorBoxProps> = ({ colors }) => {
  return (
    <div style={{ display: "flex" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

function CircularGradient() {
  const size = 100; // Definindo o tamanho do círculo

  // Definindo o gradiente radial ordenado do maior percentual ao menor
  const gradient = `
      radial-gradient(
        circle,
        red 0% 39%,      /* 40% para vermelho */
        blue 40% 69%,    /* 30% para azul (de 40% a 70%) */
        green 70% 100%   /* 30% restantes para verde */
      )
    `;

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: gradient,
      }}
    />
  );
}

const Gradients: React.FC = () => {
  const color1 = [188, 255, 0, 1];
  const color2 = [0, 54, 92, 1];

  const colors = interpolateColors(color1, color2, 15);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularGradient />
      {/* <ColorBox colors={colors} /> */}
    </div>
  );
};

export default Gradients;
