export default function About() {
    return (
      <section id="about" className="about section light-background">
        {/* Section Title */}
        <div className="container section-title">
          <h2>About Me</h2>
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
            Passionate Full Stack Developer with 5+ years of experience in building
            modern, scalable web applications using the latest technologies.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 position-relative">
              <div className="about-image">
                <img
                  src="/img/home-right.png"
                  alt="Manpreet Singh - Full Stack Developer"
                  className="img-fluid rounded-4"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <span className="subtitle">About Me</span>
                <h2>Full Stack Developer &amp; UI/UX Enthusiast</h2>
                <p className="lead mb-4">
                  I specialize in crafting high-performance web applications with a
                  strong focus on clean code, user experience, and scalable
                  solutions.
                </p>
                <p className="mb-4">
                  Passionate about bridging the gap between design and
                  development, ensuring seamless digital experiences.
                </p>
                <div className="personal-info">
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Name</span>
                        <span className="value">Manpreet Singh</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Phone</span>
                        <span className="value">+919783870541</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Experience</span>
                        <span className="value">5+ Years</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Email</span>
                        <span className="value">Manpreetsingh70.it@gmail.com</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Occupation</span>
                        <span className="value">Full Stack Developer</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Nationality</span>
                        <span className="value">Indian</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="signature mt-4">
                <div className="signature-image">
                  <img src="assets/img/misc/signature.png" alt="" className="img-fluid" />
                </div>
                <div className="signature-info">
                  <h4>Manpreet Singh</h4>
                  <p>Full Stack Developer</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  