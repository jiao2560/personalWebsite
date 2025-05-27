"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./globals.css";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav-bar">
        <a href="#internships">Internships</a>
        <a href="#projects">Projects</a>
        <a href="#life">Life Outside Work</a>
      </nav>

      {/* Two-column layout */}
      <div className="app-container">
        {/* Main Content */}
        <div className="text-section">

{/* Main Content */}
<div className="text-section">
<div className="intro-box">
  <h1>Hello, II'mapos;m Wenbo Jiao (Leo)<span>👋</span></h1>
  <p>
    II'mapos;m a versatile software engineer with hands-on experience across backend systems, cloud
    infrastructure, and frontend frameworks. I&apos;ve contributed to both product development and low-latency trading systems, spanning startups and research labs in North America and Asia.
  </p>
  <p>
    With years of academic and professional experience in the U.S. and Canada, I’apos;m fluent in English
    and comfortable collaborating across time zones, cultures, and technical disciplines. My work
    spans cloud-native architectures, distributed systems, and decentralized applications, with
    contributions deployed in production at scale.
  </p>
  <p>
    I bring a strong delivery mindset, attention to system performance, and an ability to thrive in
    fast-paced, cross-functional teams—whether on the frontend, backend, or DevOps layer.
  </p>
</div>
<section id="education">
  <h2>Education</h2>

  <div className="project-card">
    <div className="intern-header">
      <img src="/123.png" alt="Northeastern University Logo" className="intern-logo" />
      <div>
        <h3 className="intern-company">Northeastern University</h3>
        <p className="intern-role">M.S. in Computer Science</p>
        <p className="intern-date">Sep 2024 – Dec 2025 • Boston, Massachusetts, United States</p>
      </div>
    </div>

    <hr style={{ margin: "1.5rem 0", borderColor: "#333" }} />

    <div className="intern-header">
      <img src="/1234.jpg" alt="Purdue University Logo" className="intern-logo" />
      <div>
        <h3 className="intern-company">Purdue University</h3>
        <p className="intern-role">B.S. in Computer Science</p>
        <p className="intern-date">Jan 2021 – Aug 2024 • West Lafayette, Indiana, United States</p>
      </div>
    </div>
  </div>
</section>


  {/* Internships */}
  <section id="internships">
    <h2>Internships</h2>

<div className="project-card">
  <div className="intern-header">
    <img src="/vosyn.jpg" alt="Vosyn Logo" className="intern-logo" />
    <div>
      <h3 className="intern-company">Vosyn</h3>
      <p className="intern-role">Frontend Developer Intern</p>
      <p className="intern-date">May 2025 – Aug 2025 • Toronto, Ontario, Canada (Remote)</p>
    </div>
  </div>

  <ul className="project-bullets">
    <li>
      Contributed to VosynCore, a proprietary multimodal LLM, by developing multilingual
      voice-localized UI features using React.js and TypeScript.
    </li>
    <li>
      Built responsive, modular interfaces with Material-UI and Next.js, achieving a 95+ Lighthouse
      score across mobile and tablet platforms.
    </li>
    <li>
      Implemented Redux-based state management, reducing code duplication and unnecessary re-renders
      by 20%.
    </li>
    <li>
      Integrated RESTful APIs to enable real-time data sync with PostgreSQL services.
    </li>
    <li>
      Wrote component tests using Jest and React Testing Library to ensure UI stability and prevent
      regressions.
    </li>
    <li>
      Collaborated with design and backend teams, used Git for version control, and tracked sprints
      with Notion as part of Agile delivery.
    </li>
  </ul>

  <div className="tech-stack">
    <strong>Tech Skills:</strong> TypeScript, React.js, Next.js, Material-UI, Redux, Jest, React Testing Library, REST API, PostgreSQL, Git, Agile
  </div>

  <hr style={{ margin: "2rem 0", borderColor: "#333" }} />

  <div className="intern-header">
    <img src="/vosyn.jpg" alt="Vosyn Logo" className="intern-logo" />
    <div>
      <p className="intern-role">Cloud Engineer Intern</p>
      <p className="intern-date">May 2025 – Aug 2025 • Toronto, Ontario, Canada (Remote)</p>
    </div>
  </div>

  <ul className="project-bullets">
    <li>
      Built RESTful backend services with FastAPI powering video ingestion, processing, and metadata
      management for a scalable Video-On-Demand system.
    </li>
    <li>
      Wrote unit and integration tests for FastAPI endpoints with Pytest to ensure reliability and
      maintainability.
    </li>
    <li>
      Implemented structured logging and metrics collection with Prometheus and Stackdriver to
      improve observability and streamline debugging.
    </li>
    <li>
      Automated GCP infrastructure using Terraform for scalable multi-environment deployments (Dev,
      Staging, Prod).
    </li>
    <li>
      Integrated Terraform into CI/CD pipelines (GitHub Actions, Jenkins) to streamline deployments.
    </li>
    <li>
      Optimized Kubernetes clusters through autoscaling, performance tuning, and resource monitoring
      to improve uptime and efficiency.
    </li>
    <li>
      Implemented event-driven architecture with GCP Pub/Sub and Eventarc to streamline content
      delivery and microservice communication.
    </li>
  </ul>

  <div className="tech-stack">
    <strong>Tech Skills:</strong> Python, FastAPI, GCP, Pub/Sub, Eventarc, Terraform, Kubernetes, GitHub Actions, Jenkins, Prometheus, Stackdriver, Pytest
  </div>
</div>




<div className="project-card">
  <div className="intern-header">
    <img src="/orange.jpg" alt="Orange Logo" className="intern-logo" />
    <div>
      <h3 className="intern-company">Orange</h3>
      <p className="intern-role">Quantitative Developer Intern</p>
      <p className="intern-date">Jan 2025 – Apr 2025 • Toronto, Canada</p>
    </div>
  </div>
  <ul className="project-bullets">
    <li>
      Developed and maintained high-frequency MEV trading bots on Ethereum and Layer 2s, executing
      front-running, back-running, and sandwich strategies.
    </li>
    <li>
      Optimized real-time arbitrage algorithms to improve cross-DEX trade execution speed and reduce
      slippage by 8%.
    </li>
    <li>
      Engineered low-latency backends in Golang and Python on AWS EC2 for high-throughput
      transaction monitoring.
    </li>
    <li>
      Built C++ simulators to analyze bot behavior under varying mempool congestion and block
      confirmation delays.
    </li>
  </ul>

  <div className="tech-stack">
    <strong>Tech Skills:</strong> Golang, Python, AWS EC2, C++, MEV Strategies, Arbitrage, Ethereum
  </div>

  <hr style={{ margin: "2rem 0", borderColor: "#333" }} />

  <div className="intern-header">
    <img src="/orange.jpg" alt="Orange Logo" className="intern-logo" />
    <div>
      <p className="intern-role">Blockchain Software Engineer Intern</p>
      <p className="intern-date">May 2024 – Dec 2024 • Toronto, Canada</p>
    </div>
  </div>
  <ul className="project-bullets">
    <li>
      Developed and integrated multiple core products including Bridge, Wallet, and Explorer to
      support the OrangeCrypto ecosystem.
    </li>
    <li>
      Built and maintained decentralized applications (dApps) with React.js and Vite, ensuring fast
      performance and smooth user experience.
    </li>
    <li>
      Architected scalable backend services using AWS technologies including Lambda, ECS, and API
      Gateway, optimizing for high availability and cost-efficiency.
    </li>
    <li>
      Implemented CI/CD pipelines and best practices for serverless and containerized environments.
    </li>
  </ul>

  <div className="tech-stack">
    <strong>Tech Skills:</strong> React.js, Vite, AWS Lambda, ECS, API Gateway, CI/CD, dApps
  </div>
</div>



<div className="project-card">
  <div className="intern-header">
    <img src="/first.png" alt="QuarkChain Logo" className="intern-logo" />
    <div>
      <h3 className="intern-company">QuarkChain</h3>
      <p className="intern-role">Software Engineer Intern</p>
      <p className="intern-date">May 2023 – Aug 2023 • Singapore</p>
    </div>
  </div>

  <ul className="project-bullets">
    <li>
      Built RESTful backend services in Python with FastAPI to power ingestion, processing, and
      metadata management for the company’apos;s blockchain educational and marketing videos.
    </li>
    <li>
      Automated GCP infrastructure using Terraform for scalable multi-environment deployments (Dev,
      Staging, Prod).
    </li>
    <li>
      Integrated Terraform into CI/CD pipelines (GitHub Actions, Jenkins) to streamline fully
      automated deployments.
    </li>
    <li>
      Optimized Kubernetes clusters through autoscaling, tuning, and resource monitoring, boosting
      uptime by 15%.
    </li>
  </ul>

  <div className="tech-stack">
    <strong>Tech Skills:</strong> Python, FastAPI, Terraform, GCP, Kubernetes, GitHub Actions, Jenkins
  </div>
</div>


<div className="project-card">
  <div className="intern-header">
    <img src="/second.png" alt="Print-Rite Logo" className="intern-logo" />
    <div>
      <h3 className="intern-company">Print-Rite, 3D Innovation and Development Lab</h3>
      <p className="intern-role">Software Engineer Intern (Low Latency & Full-Stack)</p>
      <p className="intern-date">Oct 2018 – Jun 2019 • Zhuhai, Guangdong, China</p>
    </div>
  </div>

  <ul className="project-bullets">
    <li>
      Built a 3D print job platform using React, Node.js, MongoDB, and Express.js to automate task
      tracking and visualization.
    </li>
    <li>
      Integrated WebSockets and Redis for real-time job status updates and enhanced user
      responsiveness.
    </li>
    <li>
      Deployed a Docker + Nginx architecture on AWS EC2, integrating TensorFlow models for
      predictive print scheduling, reducing material waste by 10%.
    </li>
    <li>
      Indexed job metadata in MongoDB and exposed RESTful APIs for high-speed platform data access.
    </li>
    <li>
      Focused on optimizing backend throughput by profiling and enhancing a distributed job
      scheduler for 3D printing workflows.
    </li>
    <li>
      Implemented Redis pub/sub and WebSocket event queues to improve inter-service communication
      latency.
    </li>
    <li>
      Conducted memory and CPU profiling to improve system responsiveness by 15% under load.
    </li>
    <li>
      Managed containerized microservices on EC2 Linux environments with Spring Boot and Docker,
      supporting high-availability operations.
    </li>
  </ul>

  <div className="tech-stack">
    <strong>Tech Skills:</strong> Spring Boot, Redis, WebSocket, Docker, AWS EC2, Node.js, MongoDB, Express.js, React, Nginx, TensorFlow
  </div>
</div>

  </section>

  {/* Projects */}
  <section id="projects">
    <h2>Projects</h2>
<div className="project-card">
  <h3>Blockchain Node Operation Project</h3>
  <p>
    A hands-on infrastructure project simulating real-world responsibilities of a blockchain node
    operator. Designed and executed a multi-part system covering Ethereum node setup, RPC endpoint
    development, availability monitoring, and service observability using production-grade tools.
  </p>
  <div className="project-links">
    <a
      href="https://github.com/jiao2560/Technical-Assignment-Junior-Node-Operator"
      target="_blank"
      rel="noopener noreferrer"
    >
      📂 GitHub
    </a>
  </div>
  <ul className="project-bullets">
    <li>Provisioned an Ethereum full node (Geth + Lighthouse) connected to the Hoodi testnet via Docker Compose</li>
    <li>Developed Python scripts to call JSON-RPC methods and monitor sync status from local endpoints</li>
    <li>Built a node availability checker that reports the health of a list of nodes based on HTTP response</li>
    <li>Set up Prometheus and Grafana dashboards to visualize performance metrics and async task load</li>
    <li>Automated config structure and task breakdown to ensure modular, repeatable deployments</li>
  </ul>
  <div className="tech-stack">
    <strong>Tech Skills:</strong> Docker Compose, Geth, Lighthouse, Python, Prometheus, Grafana,
    FastAPI, JSON-RPC, Linux CLI, Monitoring
  </div>
</div>



    <div className="project-card">
      <h3>AI Study Buddy</h3>
      <p>
        A full-stack AI-powered study assistant that suggests trending and personalized topics using
        Wikipedia and Gemini AI...
      </p>
      <div className="project-links">
        <a href="https://ai-study-buddy-4.onrender.com/" target="_blank" rel="noopener noreferrer">
          🌐 Live Site
        </a>
        <a
          href="https://github.com/jiao2560/AI-Study-Buddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          📂 GitHub
        </a>
      </div>
      <ul className="project-bullets">
        <li>Developed homepage, search/filter UI, and animated AI bot character (React, CSS)</li>
        <li>
          Integrated Gemini AI & Wikipedia API in backend for quiz and trending topic generation
        </li>
        <li>
          Implemented bookmarking system and dynamic profile page with edit/view/delete actions
        </li>
        <li>Built admin dashboard for managing reports, users, and flagged materials</li>
      </ul>
      <div className="tech-stack">
        <strong>Tech Skills:</strong> React, CSS, Node.js, Gemini API, Wikipedia API, MongoDB,
        Express.js
      </div>
    </div>

    <div className="project-card">
      <h3>Custom Linux Shell</h3>
      <p>
        A low-level command-line shell implemented in C/C++ with Lex/Yacc, designed to mimic
        real-world shell behavior...
      </p>
      <div className="project-links">
        <a href="https://youtu.be/wQXiZpa7ZrM" target="_blank" rel="noopener noreferrer">
          🎥 Demo Video
        </a>
      </div>
      <ul className="project-bullets">
        <li>
          Built a fully functional shell with support for wildcard expansion, environment variables,
          and subshell logic
        </li>
        <li>
          Used Lex/Yacc to parse complex command syntax including pipelines and conditional
          execution
        </li>
        <li>
          Handled zombie processes and implemented safe termination for concurrent process chains
        </li>
        <li>
          Reduced process creation overhead by optimizing spawn logic for faster shell responsiveness
        </li>
      </ul>
      <div className="tech-stack">
        <strong>Tech Skills:</strong> C, C++, Lex, Yacc, Shell Scripting, UNIX Processes, Piping,
        Memory Optimization
      </div>
    </div>

    <div className="project-card">
      <h3>Boilergram</h3>
      <p>
        A full-stack social platform built exclusively for Purdue students, inspired by Instagram and
        Reddit...
      </p>
      <div className="project-links">
        <a
          href="https://github.com/jiao2560/Boilergram"
          target="_blank"
          rel="noopener noreferrer"
        >
          📂 GitHub
        </a>
      </div>
      <ul className="project-bullets">
        <li>
          Built full-stack social platform with secure Purdue-only account verification (JWT, Bcrypt)
        </li>
        <li>
          Implemented photo/text post creation, likes, and threaded comments with MongoDB schema
          design
        </li>
        <li>
          Developed responsive UI using React and Tailwind, including search and explore pages
        </li>
        <li>
          Deployed to Render and connected with MongoDB Atlas for production-ready scalability
        </li>
      </ul>
      <div className="tech-stack">
        <strong>Tech Skills:</strong> React, Tailwind CSS, Node.js, Express, MongoDB, JWT, Bcrypt,
        Render
      </div>
    </div>

    <div className="project-card">
      <h3>The World (Doctor Lucky)</h3>
      <p>
        A Java-based grid-world game inspired by Doctor Lucky, implemented with an MVC-aligned
        architecture...
      </p>
      <div className="project-links">
        <a
          href="https://github.com/jiao2560/Milestone-1---The-World"
          target="_blank"
          rel="noopener noreferrer"
        >
          📂 GitHub
        </a>
      </div>
      <ul className="project-bullets">
        <li>
          Designed flexible, testable model to load world config from structured .txt files (spaces,
          items, NPCs)
        </li>
        <li>
          Implemented LookAround, PickUp, and Attack features mapped to keyboard shortcuts (L, P, A)
        </li>
        <li>
          Created graphical world view using <code>BufferedImage</code> and rendered interactive
          mansion maps
        </li>
        <li>
          Enabled custom and default world support with upload functionality and player turn logic
        </li>
        <li>
          Packaged and documented a runnable JAR executable for gameplay demonstrations and grading
        </li>
      </ul>
      <div className="tech-stack">
        <strong>Tech Skills:</strong> Java, Swing, BufferedImage, OOP, MVC Architecture, JAR Packaging
      </div>
    </div>
  </section>
</div>


          {/* Life Outside Work */}
          <section className="travel-section" id="life">
            <div className="life-intro">
              <h2>Life Outside Work</h2>
              <p>
                Beyond coding, I’apos;ve spent time exploring the U.S. during my five years studying
                abroad — from the Midwest to the West Coast. Traveling helped me recharge and
                broaden my view of culture, people, and life in America.
              </p>
            </div>

            <div className="city-row">
              <div className="city-labels">
                <h3>Chicago</h3>
                <h3>Indianapolis</h3>
              </div>
              <div className="travel-gallery">
                <img src="/1.jpg" alt="Chicago 1" />
                <img src="/2.jpg" alt="Chicago 2" />
                <img src="/8.jpg" alt="Chicago 3" />
                <img src="/3.jpg" alt="Indianapolis" />
              </div>
            </div>

            <div className="city-row">
              <div className="city-labels">
                <h3>Atlanta</h3>
                <h3>San Diego</h3>
              </div>
              <div className="travel-gallery">
                <img src="/4.jpg" alt="Atlanta 1" />
                <img src="/5.jpg" alt="Atlanta 2" />
                <img src="/6.jpg" alt="Atlanta 3" />
                <img src="/7.jpg" alt="San Diego" />
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar / Image Section */}
        <div className="image-section">
          <img src="/me.jpg" alt="Wenbo Jiao" className="profile-pic" />
          <div className="icon-links">
            <Link
              href="https://www.linkedin.com/in/wenbo-j-b12982296/"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/jiao2560" target="_blank" title="GitHub">
              <FaGithub />
            </Link>
            <Link href="mailto:wbj0706@gmail.com" title="Email">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
