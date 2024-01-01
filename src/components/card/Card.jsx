import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../sharedCss/shared.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Card = ({ home }) => {

  const baseUrl = process.env.REACT_APP_BASE_URL

  async function deleteItem(itemId) {
    const res = await axios.delete(`${baseUrl}/${itemId}`)
    if (res.status == 200) {
      toast.success(`item delete`)
    } else {
      toast.error(`${res}some error ecourd`)
    }
  }
  return (
    <div className="imges-section">
      {home?.result?.map((home, i) => {
        return (
          <div key={i}>
            <NavLink
              to={`/detailsitem/${home._id}`}
              style={({ }) => ({
                textDecoration: "none",
                color: "#000",
              })}
            >
              <div className="card">
                <div className="imge">
                  <div className="cart-name-set">
                    <h4>{home.name}</h4>
                    {/* <DeleteIcon style={{ cursor: 'pointer' ,color:'red',right:'0px'}} onClick={() => {
                      deleteItem(home._id)
                      // toast.error("Hello world")
                    }} /> */}
                  </div>
                  <img src={home.images} alt="home" />
                  <h4>Rs: {home.price}</h4>
                </div>
              </div>
            </NavLink>
            <DeleteIcon style={{ cursor: 'pointer' ,color:'red',right:'0px'}} onClick={() => {
                      deleteItem(home._id)
                      // toast.error("Hello world")
                    }} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
