import { Link, useParams } from "react-router-dom";
import projects from "../../../api_db/projects.json";

export default function ProjectDetails() {
  const { projectId } = useParams();
  let project = projects.find((project) => project.id == projectId);

  return (
    <div
      className="section p-4"
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div className="d-flex flex-wrap">
        <div>
          <img
            src={`${project.img}`}
            alt="img"
            className="rounded-3"
            style={{
              objectFit: "cover",
              width: "100%",
              maxWidth: "500px",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              height: "280px"
            }}
          />
        </div>
        <div className="ms-2 mt-2 d-flex flex-column justify-content-between">
          <div>
            <h1>{project.name}</h1>
            <p>
              <small style={{ color: "#ADD8E6" }}>{project.date}</small>
            </p>
            <p style={{ maxWidth: "600px" }}>{project.description}</p>
          </div>
          <div className="d-flex">
            <a
              href={`${project.liveLink}`}
              target="_blank"
              className="nav-link me-2"
              style={{
                marginBottom: "5px",
                border: "1px solid var(--3)",
                borderRadius: "10px",
                padding: "5px",
                color: "var(--3)"
              }}
            >
              <span>Live Project</span>
            </a>
            <a
              href={`${project.githubLink}`}
              target="_blank"
              className="nav-link me-2"
              style={{
                marginBottom: "5px",
                border: "1px solid var(--3)",
                borderRadius: "10px",
                padding: "5px",
                color: "var(--3)"
              }}
            >
              <span>View Code</span>
            </a>
            <Link
              to={`/projects`}
              className="nav-link me-2"
              style={{
                marginBottom: "5px",
                border: "1px solid var(--3)",
                borderRadius: "10px",
                padding: "5px",
                color: "var(--3)"
              }}
            >
              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="p-2">
        <h1>Tech Stack:</h1>
        <p>{project.tech}</p>
      </div>
    </div>
  );
}
