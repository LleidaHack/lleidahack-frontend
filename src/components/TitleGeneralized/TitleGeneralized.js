import React from "react";
import "./TitleGeneralized.css";

const TitleGeneralized = ({
  children,
  subrallat = false,
  textAlinear = "center",
  size,
  padTop = "5%",
  margeBot = "0%",
  colorLLetra,
  bold = true,
  classe,
}) => {
  let estils = size === "big" ? "big" : "midaTitol";
  if (subrallat) {
    estils += " title-underline";
  }
  if (colorLLetra === "secondary") {
    estils += " titleblack";
  } else {
    estils += " whiteFont";
  }
  if (bold) {
    estils += " titlebold";
  }
  if (classe) {
    estils += " " + classe;
  }
  return (
    <h1
      className={estils}
      style={{
        paddingTop: padTop,
        marginBottom: margeBot,
        textAlign: textAlinear,
      }}
    >
      {children}
    </h1>
  );
};
export default TitleGeneralized;
