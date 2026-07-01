import { SiPostman } from "react-icons/si";
function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <img
            src="/images/PORTADO DEL SISTEMA HOTELERO.png"
            alt="SauceDemo"
            className="project-image"
          />

          <h3>🏨 Hotel Management System Testing</h3>
          <br />
          <p>
            Manual testing project covering reservations, rates, rooms, check-in
            and check-out processes.
          </p>
          <br />
          <span className="tag">QA</span>
          <span className="tag">Testing</span>
          <span className="tag">Api</span>
          <br />

          <a
            href="https://github.com/Glaramos/Hotel-Management-System-Testing/tree/main"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Repository →
          </a>
        </div>
      </div>
      <br />
      <div className="projects-grid">
        <div className="project-card">
          <img
            src="/images/demoblaze.jpg"
            alt="DemoBlaze"
            className="project-image"
          />

          <h3>🛒 DemoBlaze Testing</h3>
          <br />
          <p>
            Manual testing project focused on e-commerce workflows including
            authentication, cart management, purchase process and bug reporting.
          </p>

          <br />
          <span className="tag">QA</span>
          <span className="tag">Testing</span>
          <span className="tag">Mantis</span>
          <span className="tag">TestLink</span>
          <br />

          <a
            href="https://github.com/Glaramos/demoblazeQa"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Repository →
          </a>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <img
              src="/images/souce.jpg"
              alt="SauceDemo"
              className="project-image"
            />

            <h3>🛒 SauceDemo Testing</h3>
            <br />
            <p>
              Manual testing project focused on e-commerce workflows, including
              login, cart and checkout validation.
            </p>
            <br />
            <br />
            <span className="tag">QA</span>
            <span className="tag">Testing</span>
            <span className="tag">Jira</span>
            <br />

            <a
              href="https://github.com/Glaramos/SauceDemo-Testing"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repository →
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="/images/perfil Postman.PNG"
            alt="SauceDemo"
            className="project-image"
          />
          <h3>
            <SiPostman style={{ marginRight: "8px" }} />
            API Testing with Postman
          </h3>
          <br />
          <p>API testing collection with requests and validations.</p>
          <br />
          <br />
          <br />
          <span className="tag">Postman</span>
          <span className="tag">API</span>
          <span className="tag">JSON</span>
          <br />
          <a
            href="https://github.com/Glaramos/API-Testing"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Repository →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
