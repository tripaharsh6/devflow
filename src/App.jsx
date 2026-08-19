import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">DevFlow</div>

        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#product">Product</a>
        </div>

        <button className="navButton">Get Started</button>
      </nav>

      <section className="hero">
  <div className="heroBadge">
    ✦ Built for developers who ship
  </div>

  <h1>
    Build faster.
    <br />
    <span>Stay in the flow.</span>
  </h1>

  <p>
    DevFlow brings your projects, tasks and development workflow
    into one focused workspace — so you can spend less time
    managing and more time building.
  </p>

  <button className="heroButton">
    Start Building →
  </button>
</section>

<section className="productSection" id="product">

  <div className="sectionHeading">
    <span>YOUR WORKSPACE</span>
    <h2>Everything you need to keep shipping.</h2>
    <p>
      See your projects, priorities and progress without jumping
      between five different tools.
    </p>
  </div>

  <div className="dashboard">

    <aside className="sidebar">
      <div className="sidebarLogo">D</div>

      <div className="sidebarMenu">
        <div className="menuItem active">◈ Overview</div>
        <div className="menuItem">□ Projects</div>
        <div className="menuItem">✓ Tasks</div>
        <div className="menuItem">⌁ Activity</div>
      </div>

      <div className="sidebarBottom">
        <div className="menuItem">⚙ Settings</div>
      </div>
    </aside>

    <div className="dashboardContent">

      <div className="dashboardHeader">
        <div>
          <p className="smallText">WORKSPACE</p>
          <h3>Good morning, Developer.</h3>
        </div>

        <button className="newProject">+ New Project</button>
      </div>

      <div className="stats">

        <div className="statCard">
          <p>Active Projects</p>
          <h3>04</h3>
          <span>Currently in progress</span>
        </div>

        <div className="statCard">
          <p>Tasks Completed</p>
          <h3>18</h3>
          <span>This workspace</span>
        </div>

        <div className="statCard">
          <p>In Review</p>
          <h3>03</h3>
          <span>Waiting for review</span>
        </div>

      </div>

      <div className="projects">

        <div className="projectsHeader">
          <h4>Recent projects</h4>
          <span>View all →</span>
        </div>

        <div className="projectRow">
          <div>
            <strong>Portfolio Website</strong>
            <p>Frontend Development</p>
          </div>
          <span className="status progress">In Progress</span>
        </div>

        <div className="projectRow">
          <div>
            <strong>REST API Service</strong>
            <p>Backend Development</p>
          </div>
          <span className="status review">Review</span>
        </div>

        <div className="projectRow">
          <div>
            <strong>Analytics Dashboard</strong>
            <p>React Application</p>
          </div>
          <span className="status completed">Completed</span>
        </div>

      </div>

    </div>
  </div>

</section>
<section className="featuresSection" id="features">

  <div className="sectionHeading">
    <span>WHY DEVFLOW</span>
    <h2>Less managing. More building.</h2>
    <p>
      A focused workspace designed to keep development work
      clear, organized and moving forward.
    </p>
  </div>

  <div className="featureGrid">

    <div className="featureCard">
      <div className="featureIcon">01</div>
      <h3>One focused workspace</h3>
      <p>
        Keep projects, tasks and progress together instead of
        switching between disconnected tools.
      </p>
    </div>

    <div className="featureCard">
      <div className="featureIcon">02</div>
      <h3>Know what matters next</h3>
      <p>
        See active work and review status at a glance so your
        next priority is always clear.
      </p>
    </div>

    <div className="featureCard">
      <div className="featureIcon">03</div>
      <h3>Built around shipping</h3>
      <p>
        A distraction-free workflow that keeps the focus on
        turning ideas into finished projects.
      </p>
    </div>

  </div>

</section>
<section className="workflowSection" id="workflow">
  <div className="sectionHeading">
    <span>HOW IT WORKS</span>
    <h2>From idea to shipped.</h2>
    <p>
      A simple workflow that keeps your projects moving without
      adding more process.
    </p>
  </div>

  <div className="workflowGrid">

    <div className="workflowStep">
      <span>01</span>
      <h3>Create a project</h3>
      <p>
        Start with what you're building and keep everything related
        to the project in one place.
      </p>
    </div>

    <div className="workflowStep">
      <span>02</span>
      <h3>Plan the work</h3>
      <p>
        Break the project into clear tasks and always know what needs
        attention next.
      </p>
    </div>

    <div className="workflowStep">
      <span>03</span>
      <h3>Ship and review</h3>
      <p>
        Move work through progress and review until the project is
        ready to ship.
      </p>
    </div>

  </div>
</section>

<section className="finalCta">
  <h2>Ready to get back in the flow?</h2>

  <p>
    Spend less time organizing work and more time building it.
  </p>

  <button className="heroButton">
    Start Building →
  </button>
</section>

<footer className="footer">
  <div className="footerLogo">DevFlow</div>
  <p>A focused workspace for developers.</p>
  <span>Built as a product concept.</span>
</footer>
    </div>
    
  );
}

export default App;