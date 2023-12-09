import React, { useState } from "react";
import "../sharedCss/shared.css";
import { useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  DialogActions,
  ButtonBase,
  ToggleButtonGroup,
} from "@mui/material";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DetailsItem = () => {
  const [counter, setCounter] = useState(0);

  const { id } = useParams();
  let home = useSelector((item) => {
    return item.productSection;
  });
  const [open, setOpen] = useState(false);

  const handleclose = () => {
    setOpen(false);
  };
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              {home.products
                ?.filter((item) => item.id === id)
                ?.map((data, i) => {
                  return (
                    <div className="container-1" key={i}>
                      <div
                        style={{
                          height: "580px",
                          width: "500px",
                          // border: "2px solid gray",
                          borderRadius: "12px",
                          overflow: "hidden",
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                      >
                        <img className="img-details" src={data.img} />
                      </div>

                      <div className="container-2">
                        <div style={{ textAlign: "center", marginTop: "12px" }}>
                          <h1>{data.name}</h1>
                        </div>
                        <hr />
                        <div style={{ textAlign: "center", marginTop: "12px" }}>
                          <h2>Rs: {data.price}</h2>
                        </div>
                        <hr />
                        <div className="discription-section">
                          <div>
                            <h4>DISCRIPTION</h4>
                          </div>
                          <p>{data.description}</p>
                        </div>
                        <hr />
                        <div className="counter-container ">
                          <button onClick={() => setCounter(counter - 1)}>
                            -
                          </button>
                          <h4>{counter}</h4>
                          <button onClick={() => setCounter(counter + 1)}>
                            +
                          </button>
                        </div>
                        <hr />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Button variant="contained" color="primary" onClick={()=>{toast.success("Order pending details")}}>
                            ORDER DETAILS
                          </Button>
                          <Button variant="contained" color="success" onClick={()=>{toast.success("Cart pending details")}}>
                            ADD TO CART
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default DetailsItem;
