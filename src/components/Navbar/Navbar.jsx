import React, { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
 const {isAuth, logout} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLoginClick = () => {
    if (isAuth) {
      logout();
    }
    else {
      navigate("/login");
    }

  }

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="" style={{
        marginRight:"1200px"
      }}>Logo</Link>
       <Link to="">Home</Link>
      <span data-cy="navbar-cart-items-count" style={{
        marginRight:"50px"
      }}>Cart:{}</span>
      <button data-cy="navbar-login-logout-button"
        onClick={handleLoginClick}

      >{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;