import { React, useEffect, useState } from "react";

const HeaderContact = () => {
  const [onMobile, setOnMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOnMobile(true);
    } else {
      setOnMobile(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOnMobile(true);
      } else {
        setOnMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header-events bg-background-patron px-3 md:px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
      <div className="header-events__content ">
        <h1 className="header-events__title font-medium	text-4xl">Contacte</h1>
        {!onMobile}
      </div>
    </div>
  );
};

export default HeaderContact;
