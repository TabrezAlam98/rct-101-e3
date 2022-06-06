import React from "react";

// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link">logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}cart</span>
      <button data-cy="navbar-login-logout-button">logout</button>
    </div>
  );
};

export default Navbar;
