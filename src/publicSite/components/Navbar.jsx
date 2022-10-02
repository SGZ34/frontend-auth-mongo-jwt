import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
export const Navbar = () => {
  const { status } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MERN-AUTH-REDUX-JWT
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {status === "authenticated" ? (
                <>
                  <Link to="/app" className="btn btn-primary">
                    Ingresar
                  </Link>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "link-active" : ""}`
                      }
                      aria-current="page"
                      to="/auth/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "link-active" : ""}`
                      }
                      aria-current="page"
                      to="/auth/register"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
