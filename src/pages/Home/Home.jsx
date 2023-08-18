import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="d-flex nav-justify-content flex-wrap section p-2">
        <div
          className="d-flex flex-column justify-content-center mb-4"
          style={{ maxWidth: "700px" }}
        >
          <div className="mx-4">
            <div>
              <br />
              <span>&nbsp;Hi, I am</span>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "5.5rem",
                  color: "lightblue"
                }}
              >
                Mayank Pruthi
              </h1>
            </div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                color: "#7a7a7a"
              }}
            >
              Web Developer / Designer
            </p>
          </div>
          <p className="mx-4 my-0">
            focused on react functional based ecosystem, having multiple years
            of experience in designing and developing clean and slick websites
          </p>
          <br />
          <Link className="mx-4 my-3 nav-link" to="/contact">
            <span
              className="nav-resume-btn"
              style={{
                border: "1px solid white",
                borderRadius: "15px",
                padding: "10px"
              }}
            >
              &nbsp; &nbsp; Contact &nbsp; &nbsp;
            </span>
          </Link>
        </div>
        <div>
          <img src="../img/hero.png" alt="img" width="350px" />
        </div>
      </div>

      <br />

      <div className="section p-3">
        <p
          style={{
            textAlign: "center",
            color: "lightblue",
            fontSize: "2.5rem",
            fontWeight: "bolder"
          }}
        >
          PROJECTS
        </p>
        <br />
        <div className="home-project-container text-center">
          <Link
            to="/project/6"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-project"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-project-img"
                src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="img"
                width="300px"
              />
              <h4 className="my-4">
                Health<span style={{ color: "rgb(114,230,255)" }}>Ease</span>
              </h4>
            </div>
          </Link>
          <Link
            to="/project/5"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-project"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-project-img"
                src="https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="img"
                width="300px"
              />
              <h4 className="my-4">
                Web<span style={{ color: "grey" }}>Tools</span>
              </h4>
            </div>
          </Link>
          <Link
            to="/project/3"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-project"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-project-img"
                src="https://images.unsplash.com/photo-1581544291234-31340be4b1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="img"
                width="300px"
              />
              <h4 className="my-4">
                T<span style={{ color: "grey" }}>e</span>
                <span style={{ color: "lightcoral" }}>x</span>
                <span style={{ color: "lightblue" }}>t</span>Utils
              </h4>
            </div>
          </Link>
        </div>
        <br />
        <Link to="/projects" className="nav-link text-center">
          <span
            className="nav-resume-btn"
            style={{
              border: "1px solid white",
              borderRadius: "15px",
              padding: "10px 50px 10px 50px"
            }}
          >
            &nbsp; &nbsp; &nbsp; View More &nbsp; &nbsp; &nbsp;
          </span>
        </Link>
        <br />
      </div>

      <br />

      <div className="section p-3">
        <p
          style={{
            textAlign: "center",
            color: "lightblue",
            fontSize: "2.5rem",
            fontWeight: "bolder"
          }}
        >
          SERVICES
        </p>
        <br />
        <div className="home-service-container text-center">
          <Link
            to="/services"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-service text-center"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-service-img"
                src="https://images.unsplash.com/photo-1663524789630-b18292c8de6e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8d2lyZWZyYW1lfHx8fHx8MTY5MTk5NDc2OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
                alt="img"
                width="300px"
              />
              <h4 className="my-4">UI/UX Designs</h4>
            </div>
          </Link>
          <Link
            to="/services"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-service text-center"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-service-img"
                src="https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8amF2YXNjcmlwdHx8fHx8fDE2OTE5OTYwNzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
                alt="img"
                width="300px"
              />
              <h4 className="my-4">React Websites or Webapps</h4>
            </div>
          </Link>
          <Link
            to="/services"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-service text-center"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-service-img"
                src="https://images.unsplash.com/photo-1647221598091-880219fa2c8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWNvbW1lcmNlfHx8fHx8MTY5MTk5NjE2NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
                alt="img"
                width="300px"
              />
              <h4 className="my-4">E-Commerce Solutions</h4>
            </div>
          </Link>
        </div>
        <br />
        <Link to="/services" className="nav-link text-center">
          <span
            className="nav-resume-btn"
            style={{
              border: "1px solid white",
              borderRadius: "15px",
              padding: "10px 50px 10px 50px"
            }}
          >
            &nbsp; &nbsp; &nbsp; View More &nbsp; &nbsp; &nbsp;
          </span>
        </Link>
        <br />
      </div>

      <br />

      <div className="section p-3">
        <p
          style={{
            textAlign: "center",
            color: "lightblue",
            fontSize: "2.5rem",
            fontWeight: "bolder"
          }}
        >
          CONTACT
        </p>
        <br />
        <div className="home-contact-container text-center">
          <Link
            to="/contact/1"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-contact"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-contact-img"
                src="../img/contact1.png"
                alt="img"
                width="300px"
              />
              <h4 className="my-4"> Direct Message</h4>
            </div>
          </Link>
          <Link
            to="/contact/2"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-contact"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-contact-img"
                src="../img/contact2.png"
                alt="img"
                width="300px"
              />
              <h4 className="my-4">Schedule a meeting</h4>
            </div>
          </Link>
          <Link
            to="/contact/3"
            className="nav-link"
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div
              className="home-contact"
              style={{ border: "1px solid #7a7a7a", borderRadius: "1rem" }}
            >
              <img
                className="home-contact-img"
                src="../img/contact3.png"
                alt="img"
                width="300px"
              />
              <h4 className="my-4">Work Together </h4>
            </div>
          </Link>
        </div>
        <br />
        <Link to="/contact" className="nav-link text-center">
          <span
            className="nav-resume-btn"
            style={{
              border: "1px solid white",
              borderRadius: "15px",
              padding: "10px 50px 10px 50px"
            }}
          >
            Contact Now
          </span>
        </Link>
        <br />
      </div>
      <br />
      <div className="section p-3 text-center mb-2 download-resume">
        <a
          href="https://drive.google.com/file/d/1dl1EkyoSMHXqOXl8ndJoLxsMLzp-LILs/view"
          className="nav-link"
          target="_blank"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </>
  );
}
