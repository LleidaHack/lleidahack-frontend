import React from 'react'
import './Footer.css'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import llhlogo1 from '../../icons/llhlogow.png'
export function Footer( {inside, outsides } ) {
  return (
    <div id='Footer'>
    <footer>
      <div className='grupo-1'>

        <div className='box' id='leftbox'>
          <li id='nostyle'>
          <p id='smalltext'>Made With ❤️ by LleidaHack</p>

          <div id='logosxxss'>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <p id='smalltext2'>Termes i Condicions</p>
          <p id='smalltext3'>Política de privacitat</p>
          </div>
          </li>
        </div>
        <div className='box' id='centerbox'>
          <ul id='nostyle'>
          
            <h3>Mapa Web</h3>
            <br></br>
           
            
           
              {inside.map((item, index) => (
                 <li key={index}>
                  <LinkS to="{item.url}" key={index}>{item.name}</LinkS></li>
                  )
              )}
              
              
              {outsides.map((outside, index) => (
                  <li key={index}>
                  <LinkR to="{outside.url}" key={index}>{outside.name}</LinkR>
                  </li>
                  )
              )}
              
            
            
            </ul>
        </div>
        <div className='box' id='rightbox'>

        <div id='logosxxss2'>
          <div>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
          <div>
          <p id='smalltext2'>Termes i Condicions</p>
          <p id='smalltext3'>Política de privacitat</p>
          </div>
          </div>

        <LinkR to="/"><img id="llhlogo2" src={llhlogo1}  ></img> </LinkR>

        
        </div>
      </div>

      
    
    </footer>
    </div>
  )
}

export default Footer