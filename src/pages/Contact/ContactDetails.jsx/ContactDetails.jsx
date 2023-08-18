import { Link, useParams } from "react-router-dom";
import contacts from "../../../api_db/contact.json";

export default function ContactDetails() {
  const { contactId } = useParams();
  let contact = contacts.find((contact) => contact.id == contactId);

  return (
    <div
      className="section p-4 d-flex flex-wrap"
      data-aos="fade-in"
      data-aos-offset="10"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div>
        <img
          src={`${contact.img}`}
          alt="img"
          className="rounded-3"
          style={{
            objectFit: "cover",
            width: "100%",
            maxWidth: "500px",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            height: "291px"
          }}
        />
      </div>
      <div
        className="ms-2 mt-2 d-flex flex-column justify-content-between"
        width="100px"
      >
        <div>
          <h1>{contact.name}</h1>
          <p>
            <small style={{ color: "#ADD8E6" }}>{contact.description}</small>
          </p>
          <p>{contact.details}</p>
          <p>
            <a
              href={`${contact.link1}`}
              target="_blank"
              className="nav-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5px",
                border: "1px solid white",
                borderRadius: "10px",
                padding: "5px",
                width: "100px",
                backgroundColor: "var(--1)"
              }}
            >
              Mail
            </a>
            &nbsp;&nbsp;OR&nbsp;&nbsp;
            <a
              href={`${contact.link2}`}
              target="_blank"
              className="nav-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5px",
                border: "1px solid white",
                borderRadius: "10px",
                padding: "5px",
                width: "100px",
                backgroundColor: "var(--1)"
              }}
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="d-flex">
          <Link
            to={`/contact`}
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
  );
}
