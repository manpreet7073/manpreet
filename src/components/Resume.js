export default function Resume() {
  return (
<section id="resume" className="resume section">
{/* Section Title */}
<div className="container section-title">
  <h2>Resume</h2>
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
  <p>Experienced Full Stack Developer specializing in Python, Django, and modern web technologies, passionate about creating scalable and efficient digital solutions.</p>
</div>
{/* End Section Title */}
<div className="container">
  <div className="row">
    <div className="col-12">
      <div className="resume-wrapper">
        <div className="resume-block">
          <h2>Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-left">
                <h4 className="company">Freelancer</h4>
                <span className="period">January 2023 - Present</span>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-right">
                <h3 className="position">Full Stack Developer</h3>
                <p className="description">
                  - Managed multiple client projects, handling front-end and back-end development.
                  - Worked with frameworks like Django, Flask, and Vue.js.
                  - Developed and deployed over 100 web applications, ensuring high performance and scalability.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-left">
                <h4 className="company">Ameotech Informatics</h4>
                <span className="period">March 2021 - March 2023</span>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-right">
                <h3 className="position">Python Developer</h3>
                <p className="description">
                  - Developed 500+ RESTful APIs to ensure seamless integration between front-end and back-end systems.
                  - Led debugging and unit testing to enhance software reliability.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-left">
                <h4 className="company">Vidya Pranali Pvt Ltd.</h4>
                <span className="period">March 2019 - March 2021</span>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-right">
                <h3 className="position">Python Developer</h3>
                <p className="description">
                  - Designed and developed multiple web applications with optimized code quality.
                  - Ensured adherence to coding standards and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-block">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-left">
                <h4 className="company">Maharaja Ganga Singh University</h4>
                <span className="period">March 2017 - March 2020</span>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-right">
                <h3 className="position">Bachelor of Arts</h3>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-left">
                <h4 className="company">Board of Secondary Education, Jaitsar</h4>
                <span className="period">March 2016 - March 2017</span>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-right">
                <h3 className="position">Class XII</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-block">
          <h2>Certifications</h2>
          <p>DevOps Tools - Code: 6737422 (June 2024)</p>
        </div>
        <div className="resume-block">
          <h2>Projects</h2>
          <ul>
            <li>Allen & Unwin (Frontend & Backend)</li>
            <li>Allen & Unwin New Zealand (Frontend & Backend)</li>
            <li>Banking Quest (Frontend & Backend)</li>
            <li>Cleaning With Lucky (Backend)</li>
            <li>Australian Copyright Council (Frontend & Backend)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  );
}