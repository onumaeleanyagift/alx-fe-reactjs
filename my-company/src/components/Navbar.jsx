import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav style={{ backgroundColor: "#FFF", padding: "30px" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;