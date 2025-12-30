import computer_website_icon from "../assets/icons/computer-website.svg";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-heading-sub-heading-cta">
          <h1>
            I <span>build</span> and <span>improve</span> landing pages
          </h1>
          <p>I help businesses fix outdated, slow, or unclear pages by developing clean, mobile-friendly landing pages.</p>
          <button>View My Work</button>
        </div>
        <div className="hero-illustration">
          <img src={computer_website_icon} alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
