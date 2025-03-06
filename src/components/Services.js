import { Link } from "react-router-dom";

export default function Services() {
  return (
<section id="services" className="services section">
{/* Section Title */}
<div className="container section-title">
  <h2>Services</h2>
  <div className="title-shape">
    <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  </div>
  <p>
    Providing end-to-end solutions in web and software development, ensuring high-performance and scalable applications.
  </p>
</div>
{/* End Section Title */}
<div className="container">
  <div className="row align-items-center">
    <div className="col-lg-4 mb-5 mb-lg-0">
      <h2 className="fw-bold mb-4 servies-title">
        Full Stack Development Solutions
      </h2>
      <p className="mb-4">
        From frontend design to backend architecture, I build robust, scalable, and secure applications tailored to your needs.
      </p>
      <Link to="/" className="btn btn-outline-primary">
        Explore More
      </Link>
    </div>
    <div className="col-lg-8">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="service-item">
            <i className="bi bi-laptop"></i>
            <h3>Frontend Development</h3>
            <p>
              Crafting intuitive UI/UX designs with React, Vue, and modern JavaScript frameworks for a seamless user experience.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6">
          <div className="service-item">
          <i className="bi bi-code-slash"></i>
            <h3>Backend Development</h3>
            <p>
              Building robust APIs and backend systems with Node.js, Django, and SQL/NoSQL databases for efficient data handling.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6">
          <div className="service-item">
            <i className="bi bi-cloud-check icon" />
            <h3>Cloud & DevOps</h3>
            <p>
              Deploying and managing applications on AWS, Docker, and CI/CD pipelines for high availability and scalability.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6">
          <div className="service-item">
            <i className="bi bi-lock icon" />
            <h3>Security & Performance</h3>
            <p>
              Ensuring secure authentication, data encryption, and performance optimization for scalable web applications.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6">
          <div className="service-item">
            <i className="bi bi-database icon" />
            <h3>Database Management</h3>
            <p>
              Designing and optimizing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases for efficient data storage.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6">
          <div className="service-item">
            <i className="bi bi-code icon" />
            <h3>API Development</h3>
            <p>
              Developing RESTful and GraphQL APIs for seamless data exchange between frontend and backend systems.
            </p>
          </div>
        </div>
        {/* End Service Item */}
      </div>
    </div>
  </div>
</div>
</section>
  );
}
