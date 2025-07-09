import React, { useEffect, useState } from "react";
import logoLleidaHack from "../../../icons/isotip_lleidahack_blanc.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { me } from "src/services/AuthenticationService";
import { get } from "react-scroll/modules/mixins/scroller";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userID, setUserID] = useState(null);

  async function getId() {
    const id = await me();
    return id.id;
  }

  useEffect(() => {
    const fetchId = async () => {
      const id = await getId();
      setUserID(id);
    };
    fetchId();
  }, []);

  function Navigate(url) {
    navigate(url);
  }

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

            <div>
              <button
                className="bg-primaryLanding text-xl p-0 mx-2 text-CTALanding"
                onClick={() => Navigate("/lleidahacker/" + userID)}
              >
                <i class="fa-solid fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
