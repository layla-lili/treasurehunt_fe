import { Link } from "react-router-dom";
import { AuthButtonStyled, NavItem } from "../styles";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link to="/signup">
            <AuthButtonStyled>Sign up</AuthButtonStyled>
          </Link>
          <Link to="/signin">
            <AuthButtonStyled>Sign in</AuthButtonStyled>
          </Link>
          <NavItem className="nav-item nav-link" to="/treasure">
            Treasure
          </NavItem>
          <NavItem className="nav-item nav-link" to="/trash">
            Trash
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
