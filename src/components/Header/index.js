import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg py-3 ${styles.header}`}>
      <div className="container">
        <Link className="navbar-brand fw-bolder" href="/">
          Funshion
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link text-black" to="/">
              Home
            </Link>
            <Link className="nav-link text-black" to="/">
              About
            </Link>
            <Link className="nav-link text-black" to="/">
              Shop
            </Link>
            <Link className="nav-link text-black" to="/">
              Pages
            </Link>
            <Link className="nav-link text-black" to="/">
              Blog
            </Link>
          </div>
          <div className={`${styles.rightSideIcons} d-flex align-items-center`}>
            <img
              className="mx-3"
              src="/static/header/MagnifyingGlass.png"
              alt="search"
            />
            <img
              className="mx-3"
              src="/static/header/UserCircle.png"
              alt="profile"
            />
            <img
              className="mx-3"
              src="/static/header/BagSimple.png"
              alt="bag"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
