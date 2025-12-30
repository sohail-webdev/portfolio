import computer_website_icon from "../assets/icons/computer-website.svg";

const Hero = () => {
  return (
    <div className="hero-wrapper" id="about">
      <section className="hero">
        <div className="hero-heading-sub-heading-cta">
          <h1>
            Fast, Modern Websites for <div>Growing Businesses</div>
          </h1>
          <p>I'm Sohail, a web developer specializing in landing pages and business websites that look great and work properly.</p>
          <button>View My Work</button>
        </div>
        <div className="hero-illustration">
          <img src={computer_website_icon} alt="" draggable="false" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
