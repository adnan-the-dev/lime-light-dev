import React from "react";
import { NavLink } from "react-router-dom";
import '../sharedCss/shared.css'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
const Navbar = () => {
  const userData = localStorage.getItem("allUserData")
  const user = JSON.parse(userData)
  console.log(user,'user');
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
                <li className="nav-item" style={{listStyle:'none' ,color:'red'}}>
                        Wellcom to:{user.username}
                    </li>
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
                    {
                      !user ? 
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/login'>
                        Login
                      </NavLink>
                    </li> : null
                    }
                    {
                      !user ? 
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/registration'>
                        Registration
                      </NavLink>
                    </li>:null
                    }
                    <li className="nav-item">
                      <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon/>
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
