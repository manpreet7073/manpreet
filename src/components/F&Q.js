import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in HTML, CSS, jQuery, React, Next.js, Vue, Python, Django, Node.js, MySQL, SQL, Git, AWS, Docker, and DevOps tools.",
    },
    {
      question: "Do you develop both frontend and backend?",
      answer:
        "Yes, I am a full-stack developer. I work with modern frontend frameworks like React, Next.js, and Vue, while also building scalable backends using Django, Node.js, Python, and SQL databases.",
    },
    {
      question: "What is your approach to building scalable frontend applications?",
      answer:
        "I focus on modular component-based architecture using React, Next.js, and Vue. I ensure optimal performance with lazy loading, efficient state management, and reusable UI components.",
    },
    {
      question: "How do you handle state management in React applications?",
      answer:
        "I use React Context API, Redux, or Zustand for efficient state management depending on the project requirements. I also optimize API calls with caching strategies.",
    },
    {
      question: "Why do you prefer Django for backend development?",
      answer:
        "Django is a powerful and secure web framework that allows me to build scalable applications quickly. It comes with built-in authentication, ORM, and security features that make development faster and more secure.",
    },
    {
      question: "Do you have experience with REST and GraphQL APIs?",
      answer:
        "Yes, I build RESTful APIs using Django REST Framework (DRF) and Node.js (Express.js). I also work with GraphQL when projects require flexible and optimized data fetching.",
    },
    {
      question: "What databases do you work with?",
      answer:
        "I have experience working with MySQL, PostgreSQL, and SQL-based databases. I optimize database performance using indexing, query optimization, and caching mechanisms like Redis.",
    },
    {
      question: "How do you handle authentication and authorization?",
      answer:
        "I implement JWT authentication, OAuth, and session-based authentication for security. Role-based access control (RBAC) ensures proper authorization for users in applications.",
    },
    {
      question: "How do you deploy applications using AWS and Docker?",
      answer:
        "I use AWS services like EC2, S3, RDS, and Lambda for hosting. I containerize applications using Docker and orchestrate deployments with Docker Compose or Kubernetes for scalability.",
    },
    {
      question: "What DevOps tools do you use?",
      answer:
        "I work with CI/CD pipelines using GitHub Actions, GitLab CI/CD, and Jenkins. I also configure infrastructure automation using Terraform and manage deployments with Kubernetes and Docker Swarm.",
    },
  ];

  return (
    <section id="faq" className="faq section">
      <div className="container section-title">
        <h2>Frequently Asked Questions</h2>
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
        <p>Common questions about my skills and development process.</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{item.question}</h3>
                  <div className="faq-content" style={{ display: activeIndex === index ? "block" : "none" }}>
                    <p>{item.answer}</p>
                  </div>
                  <i className={`faq-toggle bi ${activeIndex === index ? "bi-chevron-down" : "bi-chevron-right"}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
