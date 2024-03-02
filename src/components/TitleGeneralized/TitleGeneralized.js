import React from 'react';
import "./TitleGeneralized.css"

const TitleGeneralized = ({ children, subrallat = false, textAlign, size, paddingTop = true}) => { 
    let estils = "titol"
    if (textAlign === "left") {
        estils += " left"
    }
    if (subrallat) {
        estils += " title-underline"
    }
    if (size === "big") {
        estils = estils.replace("titol", "big")
    } else if (size === "small") {
        estils = estils.replace("titol", "whiteFont")
    }
    if (paddingTop === false) (
        estils = estils.replace("titol", "noPadd")
    )
    return <h1 className={estils}>{children}</h1> 
};





export default TitleGeneralized;