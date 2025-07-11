import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MentorImage from "src/assets/Mentor.png";
import TimonImage from "src/assets/TIMON.png";
import Button from "src/components/buttons/Button";

const Mentoring = () => {
  return (
    <section className="py-16 bg-secondaryHackeps">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Columna izquierda - Texto (más ancha) */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-5xl font-bold text-primaryHackeps mb-8">
              Vols postular com a mentor?
            </h2>
            
            <div className="space-y-4 text-grayStrongHackeps leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit.
                Sit amet feugiat lectus. Duis autem lacus sodales eu libero
                blandit per consectetur nulla. Sed aliquam pharetra, faucibus
                feugiat nec, dictum lectus. Ut vel odio vel orci rutrum vehicula.
                Donec ut rhoncus ex. Suspendisse eu rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum.
              </p>
              
              <p>
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam in convallis. Sed at vulputate nisl. Integer in
                vehicula leo. Praesent ac arcu eget leo luctus vehicula. Sed
                rhoncus feugiat et ex vestibulum vestibulum. Morbi a eleifend
                magna. Nam metus lorem, porttitor eu mauris a, blandit ultrices
                nibh. Mauris sit amet magna non ligula vestibulum eleifend.
                Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisl. Proin vitae facilisis nisl, at
                commodo leo.
              </p>
            </div>
          </div>
          
            {/* Columna central - Timón */}
            <div className="w-96 h-96 lg:col-span-1 flex items-center justify-center lg:mr-64">
            <img 
                src={TimonImage} 
                alt="TIMON decorativo" 
                className="w-full h-full object-contain"
            />
            </div>

            {/* Columna derecha - Mentor e imagen */}
            <div className="lg:col-span-1 flex flex-col items-center space-y-8 lg:ml-64">
            {/* Imagen de mentor */}
            <div className="w-48 h-48 flex items-center justify-center">
                <img 
                src={MentorImage} 
                alt="Mentor ilustración" 
                className="w-full h-full object-contain"
                />
            </div>

       <Link to={"/contacte"}>
               <Button primary lg>
                 Contacta
               </Button>
             </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Mentoring;