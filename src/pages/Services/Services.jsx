import services from "../../api_db/services.json";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Blogs() {
  return (
    <div className="section">
      <header>
        <h1 className="text-center pt-2" style={{ fontSize: "4rem" }}>
          SERV<span style={{ color: "#7a7a7a" }}>ICES</span>
        </h1>
      </header>
      {/* <br /> */}
      <main className="mx-4 py-4">
        <div className="services-service-container">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="services-service p-2"
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
                    backgroundImage: `url("${service.img}")`,
                    backgroundRepeat: "no-repeat",
                    height: "300px",
                    borderRadius: "10px",
                    marginBottom: "10px"
                  }}
                ></div>
                <h3>{service.name}</h3>
                <p>
                  <small style={{ color: "#ADD8E6" }}>
                    {service.description}
                  </small>
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
