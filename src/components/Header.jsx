import logo from "../assets/icons/logo.svg";
import cloe_navbar_icon from "../assets/icons/close-navbar.svg";
import open_navbar_icon from "../assets/icons/toggle-navbar.svg";

const Header = ({ isMobileNavbarVisible, toggle_mobile_navbar, scrollToSection }) => {
  function handle_link_click(event) {
    toggle_mobile_navbar(event);
    scrollToSection(event);
  }

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo-name-wrapper">
          <img src={logo} alt="logo" draggable="false" />
          <p className="name">Sohail</p>
        </div>
        <nav className="nav-links-container">
          <ul>
            <li>
              <a data-name="about" onClick={handle_link_click}>
                About
              </a>
            </li>
            <li>
              <a data-name="work" onClick={handle_link_click}>
                Work
              </a>
            </li>
            <li>
              <a data-name="contact" onClick={handle_link_click}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="header-toggle-navbar-button" onClick={toggle_mobile_navbar}>
          <img src={isMobileNavbarVisible ? cloe_navbar_icon : open_navbar_icon} alt="toggle navbar" />
        </button>
        <div className={`mobile-navbar ${isMobileNavbarVisible ? "visible" : ""}`}>
          <ul>
            <li>
              <a data-name="about" onClick={handle_link_click}>
                About
              </a>
            </li>
            <li>
              <a data-name="work" onClick={handle_link_click}>
                Work
              </a>
            </li>
            <li>
              <a data-name="contact" onClick={handle_link_click}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
