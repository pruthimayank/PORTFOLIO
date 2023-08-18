import { Link } from "react-router-dom";
import contact from "../../api_db/contact.json";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="section">
      <header>
        <h1 className="text-center pt-2" style={{ fontSize: "4rem" }}>
          CON<span style={{ color: "#7a7a7a" }}>TACT</span>
        </h1>
      </header>
      {/* <br /> */}
      <main className="mx-4 py-4">
        <div className="contacts-contact-container">
          {contact.map((contact) => {
            return (
              <div
                key={contact.id}
                className="contacts-contact p-2"
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
                    marginBottom: "10px"
                  }}
                >
                  <img
                    className="contacts-contact-img"
                    src={`${contact.img}`}
                    alt="img"
                  />
                </div>
                <h3>{contact.name}</h3>
                <p>
                  <small style={{ color: "#ADD8E6" }}>
                    {contact.description}
                  </small>
                </p>
                <div>
                  <Link
                    to={`/contact/${contact.id}`}
                    className="nav-link contacts-contact-btn"
                    style={{ marginBottom: "5px" }}
                  >
                    <span>Send Request</span>
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
