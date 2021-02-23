import { Link } from "react-router-dom";
import { AuthButtonStyled, NavItem } from "../styles";
import { useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(user));
  };
  return (
    <nav className="navbar navbar-expand">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {user ? (
            <h3>Hi, {user.username}</h3>
          ) : (
            <>
              <Link to="/signup">
                <AuthButtonStyled>Sign up</AuthButtonStyled>
              </Link>
              <Link to="/signin">
                <AuthButtonStyled>Sign in</AuthButtonStyled>
              </Link>
            </>
          )}
          {user && (
            <>
              <NavItem className="nav-item nav-link" to="/treasure">
                Treasure
              </NavItem>
              <NavItem
                className="nav-item nav-link"
                to="/"
                onClick={handleLogout}
              >
                Logout
              </NavItem>
            </>
          )}
          <NavItem className="nav-item nav-link" to="/trash">
            Trash
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
