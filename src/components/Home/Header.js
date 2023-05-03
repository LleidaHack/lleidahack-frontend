import React from "react";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import './Header.css'
export function Header( {inside, outsides } ) {

 
    return <div id='theBoxNav'>
        <nav id="navegador">
        <ul className='navlink' id='icon1nav'>

        <li>
        <LinkR to="/"><i className="fas fa-lleidahacklogo"></i> </LinkR>
        </li>
        </ul>

        <ul className='navlink' id='icon2nav'>
        <li>
        <LinkR to="/"><i className="fas fa-user"></i> </LinkR>
        </li>
        </ul> 

        <ul className='navlink' id='firstnavlink'>
        <li>
            {inside.map((item, index) => (
                <LinkS to="{item.url}" key={index}>{item.name}</LinkS>)
            )}
            
            
            {outsides.map((outside, index) => (
                
                <LinkR to="{outside.url}" key={index}>{outside.name}</LinkR>
                )
            )}
        </li>
        </ul>


        </nav>
        </div>;
}