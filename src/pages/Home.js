import { useEffect, useState } from "react";
import Abot from "../components/About";
import Skill from "../components/Skills";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import FQ from "../components/F&Q";
import Contact from "../components/Contact";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animate stats counter
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = 30;

    const animateStat = (finalValue, key) => {
      const steps = Math.ceil(duration / incrementTime);
      const increment = finalValue / steps;

      let currentValue = start;
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(timer);
        }
        setStats((prevStats) => ({ ...prevStats, [key]: Math.floor(currentValue) }));
      }, incrementTime);
    };

    animateStat(5, "experience");
    animateStat(100, "projects");
    animateStat(50, "clients");
  }, []);

  return (
    <>
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row align-items-center content">
            <div className="col-lg-6">
              <h1>Manpreet Singh</h1>
              <h2>Full Stack Developer</h2>
              <p className="lead">
                Crafting Digital Experiences with Passion – Transforming ideas into elegant solutions through creative design and innovative development.
              </p>
              <div className="cta-buttons">
                <a href="#portfolio" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Let's Connect
                </a>
                <a
                  href="/cv/manpreet_cv.pdf"
                  download="manpreet_cv.pdf"
                  className="btn btn-secondary"
                >
                  Download CV
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{stats.experience}+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{stats.projects}+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{stats.clients}+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img
                  src="/img/home-right.png"
                  alt="Manpreet Singh - Full Stack Developer"
                  className="img-fluid"
                />
                <div className="shape-1" />
                <div className="shape-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Abot />
      <Skill />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Services />
      <FQ />
      <Contact />

      <button
        className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? "show" : "hide"}`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </>
  );
}
