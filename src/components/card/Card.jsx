import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../sharedCss/shared.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
const Card = ({ home }) => {
  const [open, setOpen] = useState(false);

  const handleclose = () => {
    setOpen(false);
  };
  return (
    <div className="imges-section">
      {home.products?.map((home, i) => {
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
                  <h2>{home.name}</h2>
                  <img src={home.img} alt="home" />
                  <h3>$: {home.price}</h3>
                </div>
              </div>
            </NavLink>
            <Button onClick={()=>setOpen(true)} variant="contained" color="primary">
              QUICKVIEW
            </Button>
          </div>
        );
      })}
      <Dialog onClick={handleclose} open={open}>
        <div className="pop-up">
          <DialogTitle>
            <h2 style={{ padding: 0, margin: "0" }}>hello</h2>
          </DialogTitle>

          <DialogContent
            sx={{ textAlign: "center", margin: "0", padding: "0" }}
          >
            <h2>Total item</h2>
            <h2>hello</h2>
            <Divider />
            <h2>Total Price</h2>
            <h2>Kia hal ha</h2>
          </DialogContent>

          <DialogActions sx={{ paddingBottom: "30px" }}>
            <Button onClick={handleclose} variant="contained" color="primary">
              ADD TO CART
            </Button>
          </DialogActions>
        </div>
      </Dialog>
      ;
    </div>
  );
};

export default Card;
