import React from 'react';
import "./TitleGeneralized.css"

const TitleGeneralized = ({ children, subrallat = false, textAlinear = "center", size, padTop = "5%", margeBot = "0%", colorLLetra, bold = true, classe}) => { 
    let estils = size === "big" ? "big" : "midaTitol"
    if (subrallat) {
        estils += " title-underline"
    }
    if (colorLLetra === "secundari") {
        estils += " negre"
    } else {
        estils += " whiteFont"
    }
    if (bold) {
        estils += " negreta"
    }
    if (classe) {
        estils += " " + classe
    }
    return <h1 className={estils} style={{paddingTop: padTop, marginBottom: margeBot, textAlign: textAlinear}}>{children}</h1> 
};
export default TitleGeneralized;