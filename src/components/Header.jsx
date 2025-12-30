import logo from "../assets/icons/logo.svg";

const Header = () => {
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
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
