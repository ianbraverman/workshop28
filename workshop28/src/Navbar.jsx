import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/red">Red</NavLink>
      <NavLink to="/blue">Blue</NavLink>
    </nav>
  );
}
