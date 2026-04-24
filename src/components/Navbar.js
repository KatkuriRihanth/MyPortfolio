import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>My Portfolio</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;