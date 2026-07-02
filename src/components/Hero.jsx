function Hero() {
  return (
    <section className="hero">
      <h1>{">"} Gladys</h1>

      <h2>QA Tester</h2>

      <p>
        Passionate about software quality, manual testing, API testing and bug
        reporting.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="hero-btn">
          View Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1OVrrTr-fEuYGSSlrn0qCzm372vSRiMIB/view?usp=sharing"
          download
          className="hero-btn"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Hero;
