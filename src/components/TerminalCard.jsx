function TerminalCard() {
  return (
    <section className="mac-terminal">
      <div className="mac-header">
        <div className="mac-buttons">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="mac-title">Gladys — zsh — 80x24</div>
      </div>

      <div className="mac-body">
        <p className="login-line">Last login: Today on ttys000</p>

        <p>
          <span className="user">gladys@MacBook-Air</span>
          <span className="path"> ~ </span>
          <span className="prompt">%</span>
          <span className="command"> cat profile.json</span>
        </p>

        <pre className="response">
          {`{
  "name": "Gladys",
  "role": "QA Tester",
  "location": "Misiones, Argentina",
  "focus": [
    "Manual Testing",
    "API Testing"
  ],
  "tools": [
    "Postman",
    "Jira",
    "Mantis",
    "SQL",
    "GitHub"
  ],
  "status": "Open to QA Opportunities"
}`}
        </pre>

        <p>
          <span className="user">gladys@MacBook-Air</span>
          <span className="path"> ~ </span>
          <span className="prompt">%</span>
          <span className="cursor"></span>
        </p>
      </div>
    </section>
  );
}

export default TerminalCard;
