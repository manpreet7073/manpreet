import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage("");
    setErrors({});

    const formData = {
      name: e.target.elements.name.value.trim(),
      email: e.target.elements.email.value.trim(),
      subject: e.target.elements.subject.value.trim(),
      message: e.target.elements.message.value.trim(),
    };

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `Please enter your ${key}.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    emailjs
      .sendForm("service_fd5pypq", "template_zfrvqii", e.target, "YVhQ-69FJJ8W81fJc")
      .then(
        (result) => {
          setSubmitMessage("Message sent successfully!");
          setLoading(false);
          e.target.reset();
          setTimeout(() => setSubmitMessage(""), 3000);
        },
        (error) => {
          setSubmitMessage("An error occurred, please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact section light-background">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content">
              <div className="section-category mb-3">Get in Touch</div>
              <h2 className="display-5 mb-4">Let's Connect and Build Something Amazing!</h2>
              <p className="lead mb-4">
                Feel free to reach out for collaborations, project inquiries, or just to say hello.
              </p>
              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-envelope-at me-3" />
                  <span>Manpreetsingh70.it@gmail.com</span>
                </div>
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone me-3" />
                  <span>+91 9783870541</span>
                </div>
                <div className="info-item d-flex mb-4">
                  <i className="bi bi-geo-alt me-3" />
                  <span>Mohali, India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form card">
              <div className="card-body p-4 p-lg-5">
                {submitMessage && <p className="alert alert-success">{submitMessage}</p>}
                <form onSubmit={sendEmail}>
                  <div className="row gy-4">
                    <div className="col-12">
                      <input type="text" name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Your Name" />
                      <div className="invalid-feedback">{errors.name}</div>
                    </div>
                    <div className="col-12">
                      <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Your Email" />
                      <div className="invalid-feedback">{errors.email}</div>
                    </div>
                    <div className="col-12">
                      <input type="text" name="subject" className={`form-control ${errors.subject ? 'is-invalid' : ''}`} placeholder="Subject" />
                      <div className="invalid-feedback">{errors.subject}</div>
                    </div>
                    <div className="col-12">
                      <textarea name="message" rows={6} className={`form-control ${errors.message ? 'is-invalid' : ''}`} placeholder="Your Message"></textarea>
                      <div className="invalid-feedback">{errors.message}</div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-submit w-100" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}