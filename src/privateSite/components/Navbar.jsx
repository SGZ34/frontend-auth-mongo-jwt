import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
export const Navbar = () => {
  const { startLogout } = useAuth();
  const handleLogout = () => {
    if (confirm("¿Deseas cerrar sesión?")) {
      startLogout();
    }
  };
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
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
