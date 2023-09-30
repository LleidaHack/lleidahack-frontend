import React, { useEffect, useState } from "react";
import "src/components/LoadSection/LoadSection.css";


const LoadSection = () => {

    return(

        <div className="valerre">
            <div class="loader">
                <svg class="circular-loader"viewBox="25 25 50 50" >
                <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="var(--primary)" stroke-width="2" />
                </svg>
                
            </div>
            <h2 className="ellipsis-dots title2">Carregant</h2>
        </div>
    )
}

export default LoadSection