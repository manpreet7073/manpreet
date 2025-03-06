export default function Portfolio() {
  return (
      <section id="portfolio" className="portfolio section">
          <div className="container section-title">
              <h2>Portfolio</h2>
              <div className="title-shape">
                  <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth={2} />
                  </svg>
              </div>
              <p>Showcasing my work in frontend and backend development.</p>
          </div>
          <div className="container">
              <div className="row g-4 isotope-container">
                  {/* Project: Allen & Unwin */}
                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                      <div className="portfolio-card">
                          <div className="portfolio-image">
                              <img src="/img/portfolio/Au.png" className="img-fluid" alt="Allen & Unwin" loading="lazy" />
                              <div className="portfolio-overlay">
                                  <div className="portfolio-actions">
                                      <a href="https://www.allenandunwin.com/" target="_blank" rel="noopener noreferrer" className="details-link">
                                          <i className="bi bi-arrow-right" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="portfolio-content">
                              <span className="category">Full Stack Development</span>
                              <h3>Allen & Unwin</h3>
                              <p>Developed a comprehensive web solution integrating frontend and backend technologies.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                      <div className="portfolio-card">
                          <div className="portfolio-image">
                              <img src="/img/portfolio/md.png" className="img-fluid" alt="Australian Copyright Council" loading="lazy" />
                              <div className="portfolio-overlay">
                                  <div className="portfolio-actions">
                                      <a href="https://www.murdochbooks.com/" target="_blank" rel="noopener noreferrer" className="details-link">
                                          <i className="bi bi-arrow-right" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="portfolio-content">
                              <span className="category">Full Stack Development</span>
                              <h3>Murdoch Books</h3>
                              <p>Developed a comprehensive web solution integrating frontend and backend technologies.</p>
                          </div>
                      </div>
                  </div>
                  {/* Project: Banking Quest */}
                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                      <div className="portfolio-card">
                          <div className="portfolio-image">
                              <img src="/img/portfolio/bq.png" className="img-fluid" alt="Banking Quest" loading="lazy" />
                              <div className="portfolio-overlay">
                                  <div className="portfolio-actions">
                                      <a href="https://www.bankingquest.com/" target="_blank" rel="noopener noreferrer" className="details-link">
                                          <i className="bi bi-arrow-right" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="portfolio-content">
                              <span className="category">Backend Development</span>
                              <h3>Banking Quest</h3>
                              <p>Developed a comprehensive web solution integrating frontend and backend technologies.</p>
                          </div>
                      </div>
                  </div>
                  {/* Project: Cleaning With Lucky */}
                  <div className="col-lg-6 col-md-6 portfolio-item filter-brand">
                      <div className="portfolio-card">
                          <div className="portfolio-image">
                              <img src="/img/portfolio/p8.png" className="img-fluid" alt="Cleaning With Lucky" loading="lazy" />
                              <div className="portfolio-overlay">
                                  <div className="portfolio-actions">
                                      <a href="https://cleaningwithlucky.com/" target="_blank" rel="noopener noreferrer" className="details-link">
                                          <i className="bi bi-arrow-right" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="portfolio-content">
                              <span className="category">Full Stack Development</span>
                              <h3>Cleaning With Lucky</h3>
                              <p>Developed a comprehensive web solution integrating frontend and backend technologies.</p>
                          </div>
                      </div>
                  </div>
                  {/* Project: Australian Copyright Council */}
                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                      <div className="portfolio-card">
                          <div className="portfolio-image">
                              <img src="/img/portfolio/acc.png" className="img-fluid" alt="Australian Copyright Council" loading="lazy" />
                              <div className="portfolio-overlay">
                                  <div className="portfolio-actions">
                                      <a href="https://www.copyright.org.au/" target="_blank" rel="noopener noreferrer" className="details-link">
                                          <i className="bi bi-arrow-right" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="portfolio-content">
                              <span className="category">Full Stack Development</span>
                              <h3>Australian Copyright Council</h3>
                              <p>Developed a comprehensive web solution integrating frontend and backend technologies.</p>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                      <div className="portfolio-card">
                          <div className="portfolio-image">
                              <img src="/img/portfolio/af.png" className="img-fluid" alt="Australian Copyright Council" loading="lazy" />
                              <div className="portfolio-overlay">
                                  <div className="portfolio-actions">
                                      <a href="https://affirmpress.com.au/" target="_blank" rel="noopener noreferrer" className="details-link">
                                          <i className="bi bi-arrow-right" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="portfolio-content">
                              <span className="category">Full Stack Development</span>
                              <h3>Affirm Press</h3>
                              <p>Developed a comprehensive web solution integrating frontend and backend technologies.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                      <div className="portfolio-card">
                          <div className="portfolio-image">
                              <img src="/img/portfolio/an.png" className="img-fluid" alt="Australian Copyright Council" loading="lazy" />
                              <div className="portfolio-overlay">
                                  <div className="portfolio-actions">
                                      <a href="https://www.allenandunwin.co.nz/" target="_blank" rel="noopener noreferrer" className="details-link">
                                          <i className="bi bi-arrow-right" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="portfolio-content">
                              <span className="category">Full Stack Development</span>
                              <h3>Allen & Unwin Aotearoa New Zealand</h3>
                              <p>Developed a comprehensive web solution integrating frontend and backend technologies.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
