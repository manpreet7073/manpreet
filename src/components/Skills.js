import { useEffect, useState, useMemo } from "react";

export default function Skill() {
  // Memoize skillsData to prevent re-declaration on re-renders
  const skillsData = useMemo(() => [
    { name: "HTML", level: 90, desc: "Expert in structuring web pages with semantic HTML." },
    { name: "CSS", level: 95, desc: "Proficient in modern styling techniques with CSS3." },
    { name: "JavaScript", level: 90, desc: "Strong in ES6+ JavaScript for dynamic applications." },
    { name: "jQuery", level: 75, desc: "Experience with jQuery for interactive UI components." },
    { name: "Python", level: 90, desc: "Skilled in Python for web and software development." },
    { name: "Django", level: 85, desc: "Building robust web applications with Django framework." },
    { name: "Django REST", level: 85, desc: "Creating RESTful APIs using Django REST Framework." },
    { name: "AWS", level: 80, desc: "Deploying and managing applications on AWS cloud." },
    { name: "Nginx", level: 75, desc: "Configuring Nginx for high-performance web serving." },
    { name: "Docker", level: 80, desc: "Experience in containerizing applications with Docker." },
    { name: "Next.js", level: 85, desc: "Creating server-rendered React applications with Next.js." },
    { name: "React", level: 95, desc: "Building scalable frontend applications with React." },
    { name: "Vue.js", level: 80, desc: "Developing modern frontend applications using Vue.js." },
    { name: "Node.js", level: 90, desc: "Building scalable backend services with Node.js." }
  ], []);

  const [animatedLevels, setAnimatedLevels] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const intervals = skillsData.map((skill, index) => {
      return setInterval(() => {
        setAnimatedLevels((prevLevels) => {
          const newLevels = [...prevLevels];
          if (newLevels[index] < skill.level) {
            newLevels[index] += 1;
          } else {
            clearInterval(intervals[index]); // Ensure clearing interval properly
          }
          return newLevels;
        });
      }, 15);
    });

    return () => intervals.forEach(clearInterval);
  }, [skillsData]);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="row g-4 skills-animation">
          {skillsData.map((skill, index) => (
            <div className="col-md-6 col-lg-3" key={skill.name}>
              <div className="skill-box">
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
                <span className="text-end d-block">{animatedLevels[index]}%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={animatedLevels[index]}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{
                      width: `${animatedLevels[index]}%`,
                      transition: "width 0.2s ease-in-out"
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
