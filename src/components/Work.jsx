import project_1_thumbnail from "../assets/images/project-1.png";
import project_2_thumbnail from "../assets/images/project-2.png";
import project_3_thumbnail from "../assets/images/project-3.png";

const projects = [
  {
    image: project_1_thumbnail,
    title: "Bookmark Landing Page",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://sohail-bookmark-landing-page.netlify.app/",
  },
  {
    image: project_2_thumbnail,
    title: "Agency Landing Page",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://sohail-agency-landing-page.netlify.app/",
  },
  {
    image: project_3_thumbnail,
    title: "Blogr Landing Page",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://sohail-blogr-landing-page.netlify.app/",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} draggable="false" />
      <h3>{project.title}</h3>
      <div className="project-card-tools">
        {project.tools.map(tool => (
          <p key={tool}>{tool}</p>
        ))}
      </div>
      <div className="project-card-cta-button">
        <a href={project.link} rel="noopener noreferrer" target="_blank">
          View Live
        </a>
      </div>
    </div>
  );
}

const Work = ({ ref }) => {
  return (
    <div className="work-wrapper" id="work" ref={ref}>
      <section className="work">
        <h2>Recent Projects</h2>
        <p>Practice builds based on real-world design briefs, focused on clean layout, responsiveness, and conversion structure.</p>
        <div className="recent-works-container">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
