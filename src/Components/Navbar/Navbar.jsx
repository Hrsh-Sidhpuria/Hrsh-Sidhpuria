import "./Navbar.css";
import { Link } from "react-scroll";
import LanguageSelection from "../LanguageSelection/LanguageSelection";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="n-wrapper">
      <div className="nav-wrapper"></div>
      <div className="n-left">
        <div className="n-name">Portfolio.</div>
        <div className="nav-language-selection">
          <LanguageSelection />
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} activeClass="activeClass" to="Intro" smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to="About" smooth={true}>
              <li>{t("nav-about")}</li>
            </Link>
            <Link spy={true} to="Technologies" smooth={true}>
              <li>{t("nav-tech")}</li>
            </Link>
            <Link spy={true} to="Projects" smooth={true}>
              <li>{t("nav-project")}</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link spy={true} to="ContactMe" smooth={true}>
            <button class="button" role="button">
              <span class="text">Contact</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="media-n-right">
        <div>
          <Link spy={true} to="ContactMe" smooth={true}>
            <button class="button btn-for-media" role="button">
              <span class="text">Contact</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
