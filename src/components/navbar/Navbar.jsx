import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../sharedCss/shared.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
const Navbar = () => {
  const userData = localStorage.getItem("allUserData");
  const user = JSON.parse(userData);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/registration");
  };
  const [anchorElUser, setAnchorElUser] = useState("");
  // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const cartItem = useSelector((item) => {
    return item.productSection.cart;
  });
  return (
    <>
      <div
        className="container-fluid nav_bg"
        style={{ position: "sticky", top: "0", zIndex: "1030" }}
      >
        <div className="row">
          <div className="col-15 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand">The Dev Web</a>
                {/* <li className="nav-item" style={{ listStyle: 'none', color: 'red' }}>
                  Wellcom to:{user?.username}
                </li> */}
                {/* <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">hello</span>
                </button> */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navbar-nav mb-2 mb-lg-0"
                    style={{ marginLeft: "auto" }}
                  >
                    <a
                      style={{
                        position: "absolute",
                        left: "38rem",
                        paddingTop:'0px',
                        backgroundImage:
                          "linear-gradient(90deg, #16e2c0 46%, #f1e609 49%)",
                        color: "#0000",
                        webkitBackgroundClip: "text",
                        backgroundClip: "text",
                        fontWeight: "bold",
                        display: "inlineBlock",
                        fontSize: "1.8rem",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      }}
                      className="navbar-brand"
                    >
                      LIME LIGHT
                    </a>
                    {user ? (
                      <>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                          >
                            Home
                          </NavLink>
                        </li>
                        {/* <li className="nav-item">
                          <NavLink className="nav-link" to="/services">
                            Services
                          </NavLink>
                        </li> */}
                        {/* <li className="nav-item">
                          <NavLink className="nav-link" to="/about">
                            About
                          </NavLink>
                        </li> */}
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/userdetails">
                            UserDetails
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/productadd">
                            AddProduct
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/login">
                            Login
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/registration">
                            Registration
                          </NavLink>
                        </li>
                      </>
                    )}

                    {user ? (
                      <>
                        <Box sx={{ flexGrow: 0 }}>
                          <Tooltip title="Open settings">
                            <IconButton
                              onClick={handleOpenUserMenu}
                              sx={{ p: 0 }}
                            >
                              <Avatar alt={user?.username} src="" />
                            </IconButton>
                          </Tooltip>
                          <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                          >
                            {/* {settings.map((setting) => ( */}
                            {/* <MenuItem key={setting} onClick={handleCloseUserMenu}> */}
                            <MenuItem>
                              <Typography
                                textAlign="center"
                                onClick={() => logout()}
                              >
                                Logout
                              </Typography>
                            </MenuItem>
                            <Typography textAlign="center">
                              {user?.email}
                            </Typography>
                            {/* ))} */}
                          </Menu>
                        </Box>
                        <NavLink to="/total-orders" className="nav-item">
                          <Badge
                            badgeContent={cartItem.length || "0"}
                            color="primary"
                          >
                            <ShoppingCartIcon />
                          </Badge>
                        </NavLink>
                      </>
                    ) : null}
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
