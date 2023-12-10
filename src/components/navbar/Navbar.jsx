import React from "react";
import { NavLink } from "react-router-dom";
import '../sharedCss/shared.css'
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg" style={{position:'sticky',top:'0',zIndex: '1030'}}>
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                The Dev Web
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navbar-nav mb-2 mb-lg-0"
                    style={{ marginLeft: "auto" }}
                  >
                    <li className="nav-item">
                      <NavLink 
                        className="nav-link active"
                        aria-current="page"
                        to='/'
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/services'>
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/about'>
                        About 
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/contact'>
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/productadd'>
                        AddProduct
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <Badge badgeContent={4} color="primary">
                        {/* <ShoppingCartIcon/> */}
                      </Badge>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
