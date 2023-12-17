import React, { useState } from "react";
import { NavLink, json } from "react-router-dom";
import "../sharedCss/shared.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Card = ({ home }) => {
  const dispatch = useDispatch()
  return (
    <div className="imges-section">
      {home?.products?.map((home, i) => {
        return (
          <div key={i}>
            <NavLink
              to={`/detailsitem/${home.id}/`}
              style={({}) => ({
                textDecoration: "none",
                color: "#000",
              })}
            >
              <div className="card">
                <div className="imge">
                  <h3>{home.name}</h3>
                  <img src={home.img} alt="home" />
                  <h3>$: {home.price}</h3>
                </div>
              </div>
            </NavLink>
            <Button variant="contained" color="primary" style={{maxWidth: '30px', maxHeight: '30px',marginTop:'4px'}} onClick={()=>{
                 dispatch({
                  type:"DELETET_PRODUCT",
                  payload:home.id
                })
                toast.success("Item Delete")
            }}>
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
