import bugIcon from "../assets/bug-search.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo-title">
        <img src={bugIcon} alt="Bug icon" className="bug-icon" />
        QA Gladys Ramos
      </h3>

      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
