import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { me } from "src/services/AuthenticationService";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    me().catch(() => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userID");
      localStorage.removeItem("refreshToken");
      navigate("/admin/login");
    });
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userID");
    localStorage.removeItem("refreshToken");
    navigate("/admin/login");
  };

  return (
    <div>
      <div className="bg-primaryLanding w-full h-16 px-4 py-2 items-center">
        <div className="flex justify-between items-center">
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
                className={`no-underline text-CTALanding hover:text-secondaryLanding duration-300 ${location.pathname.includes("/admin/events") ? "font-bold" : ""}`}
              >
                Esdeveniments
              </a>
            </li>
          </div>
          <div className="flex">
            <button className="bg-primaryLanding text-xl p-0 mx-2 " onClick={logout}>
              <i className="fa-solid fa-arrow-right-from-bracket text-white"></i>
            </button>

            <a
              href="/admin/administration"
              className={`bg-primaryLanding text-xl p-0 mx-2 text-CTALanding no-underline ${location.pathname.includes("/admin/administration") ? "font-bold" : ""}`}
            >
              <i className="fa-solid fa-user-shield"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
