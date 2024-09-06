import React from "react";
import logoLleidaHack from "../../../icons/isotip_lleidahack_blanc.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <div className="bg-primaryLanding w-full h-16 px-4 py-2 items-center">
        <div className="flex justify-between items-center">
          <a href="/lleidahack">
            <img
              src={logoLleidaHack}
              alt="logo"
              className="h-12 w-12 flex-none"
            />
          </a>
          <div className="flex items-center justify-center ">
            <li className="mx-8 text-xl list-none">
              <a
                href="/admin/"
                className="no-underline text-CTALanding hover:text-secondaryLanding duration-300"
              >
                Home
              </a>
            </li>
            <li className="mx-8 text-xl list-none	">
              <a
                href="/admin/events"
                className={`no-underline text-CTALanding hover:text-secondaryLanding duration-300 ${location.pathname === "/lleidahack/qui-som" ? "font-bold" : ""}`}
              >
                Esdeveniments
              </a>
            </li>
          </div>
          <div className="flex">
            <button className="bg-primaryLanding text-xl p-0 mx-2 ">
              <i class="fa-solid fa-arrow-right-from-bracket text-white"></i>
            </button>
            <button className="bg-primaryLanding text-xl p-0 mx-2 text-CTALanding">
              <i class="fa-solid fa-user"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
