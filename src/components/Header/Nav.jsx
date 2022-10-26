import "./header.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-bar">
        <li className="">
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Catálogo</Link>
        </li>
        <li>
          <Link to="/">Nosotros</Link>
        </li>
        <li>
          <Link to="/">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
