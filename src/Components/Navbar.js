import { Link } from "react-router-dom";
import navClasses from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={navClasses.navbar}>
      <div className={navClasses.logo}>
        <h1>Socio App</h1>
      </div>
      <div className={navClasses.searchBar}>
        <input placeholder="🔎Search"></input>
        <button>
          <i className="fa fa-search fa-2x"></i>
        </button>
      </div>
      <div className={navClasses.navProfileOptions}>
        <Link
          style={{ textDecoration: "none", color: "rgb(0, 138, 131)" }}
          to="/home"
        >
          <div title="Home">
            <i className="fa fa-home fa-2x"></i>
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "rgb(0, 138, 131)" }}
          to="/createPost"
        >
          <div title="Create a Post">
            <i className="fa fa-plus-square-o fa-2x"></i>
          </div>
        </Link>
        <div title="Profile Options">
          <i className="fa fa-user-circle-o fa-2x"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
