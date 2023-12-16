import React, { useState } from "react";
import "../sharedCss/shared.css";
import { NavLink, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const DetailsItem = () => {
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const { id } = useParams();
  const detailsData = useSelector((item) => item.productSection.products).find(
    (item) => item.id == id
  );
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="container-1">
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
                  <img className="img-details" src={detailsData.img} />
                </div>

                <div className="container-2">
                  <div style={{ textAlign: "center", marginTop: "12px" }}>
                    <h1>{detailsData.name}</h1>
                  </div>
                  <hr />
                  <div style={{ textAlign: "center", marginTop: "12px" }}>
                    <h2>Rs: {detailsData.price}</h2>
                  </div>
                  <hr />
                  <div className="discription-section">
                    <div>
                      <h4>DESCRIPTION</h4>
                    </div>
                    <p>{detailsData.description}</p>
                  </div>
                  <hr />
                  <div className="counter-container ">
                    <button onClick={() => setCounter(counter - 1)}>-</button>
                    <h4>{counter}</h4>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <NavLink to="/total-orders">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          toast.success("Check the order");
                        }}
                      >
                        ORDER DETAILS
                      </Button>
                    </NavLink>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: detailsData,
                        });
                        toast.success("Added to cart");
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Dialog onClick={handleclose} open={open}>
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
      </Dialog> */}
    </>
  );
};

export default DetailsItem;
