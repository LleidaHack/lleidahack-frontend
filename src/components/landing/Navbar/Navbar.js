import logoLleidaHack from "src/icons/isotip_lleidahack_blanc.png";
import { useLocation } from "react-router-dom";
import NavbarComponent from "src/components/navbarComponent/navbarComponent";

const links = [
  { href: "/", label: "Inici" },
  { href: "/events", label: "Events" },
  { href: "/noticies", label: "Noticies" },
  { href: "/contacte", label: "Contacte" },
  { href: "/legalinfo", label: "Legal" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarComponent
      bgColor="#FF7430"
      textColor="white"
      logoimg={logoLleidaHack}
      centerContent={
        <>
          {links.map((link) => (
            <li key={link.href} className="text-xl list-none">
              <a
                href={link.href}
                className={`no-underline text-CTALanding hover:text-secondaryLanding duration-300 ${
                  location.pathname === link.href ? "font-bold" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </>
      }
      endContent={<></>}
      dropEndContent={<></>}
      showCenterContentOnlyOnDrop={false}
      logoRedirect="/"
    />
  );
};

export default Navbar;
