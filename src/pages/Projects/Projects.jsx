import { Link } from "react-router-dom";

import projects from "../../api_db/projects.json";
import "./Projects.css";

export default function Project() {
  return (
    <div className="section">
      <header>
        <h1 className="text-center pt-2" style={{ fontSize: "4rem" }}>
          PROJ<span style={{ color: "#7a7a7a" }}>ECTS</span>
        </h1>
      </header>
      {/* <br /> */}
      <main className="mx-4 py-4">
        <div className="projects-project-container">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="projects-project p-2"
                style={{
                  border: "1px solid #7a7a7a",
                  borderRadius: "1rem"
                }}
                data-aos="zoom-in-up"
                data-aos-offset="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div
                  style={{
                    backgroundImage: `url("${project.img}")`,
                    backgroundRepeat: "no-repeat",
                    height: "200px",
                    borderRadius: "10px",
                    marginBottom: "10px"
                  }}
                ></div>
                <h3>&nbsp;{project.name}</h3>
                <p>
                  <small style={{ color: "#ADD8E6" }}>
                    &nbsp;&nbsp;{project.date}
                  </small>
                </p>
                <div>
                  <a
                    href={`${project.liveLink}`}
                    target="_blank"
                    className="nav-link projects-project-btn"
                    style={{ marginBottom: "5px" }}
                  >
                    <span>Live Project</span>
                  </a>
                  <a
                    href={`${project.githubLink}`}
                    target="_blank"
                    className="nav-link projects-project-btn"
                    style={{ marginBottom: "5px" }}
                  >
                    <span>View Code</span>
                  </a>
                  <Link
                    to={`/project/${project.id}`}
                    className="nav-link projects-project-btn"
                  >
                    <span>About</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
