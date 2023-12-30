import React, { useEffect, useState } from "react";
import "../sharedCss/shared.css";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { Circles } from 'react-loader-spinner';

const DetailsItem = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [detailsProducts, setDetailsProducts] = useState([])
  console.log(detailsProducts.result, 'dksfhskf');
  const [loading, setLoading] = useState(false)
  const baseUrl = process.env.REACT_APP_BASE_URL
  // get all user Api
  async function getProductsData() {
    setLoading(true)
    const response = await axios.get(
      `${baseUrl}/products`
    );
    if (response.status == 200) {
      setDetailsProducts(response?.data)
      setLoading(false)
    }
  }
  const detailsData = detailsProducts.result?.find((item) => item._id == id)
  console.log(detailsData);

  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              {
                loading ? <Circles /> :
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
                      <img src={detailsData?.images} alt="hello" className="img-details"></img>
                    </div>
                    <div className="container-2">
                      <div style={{ textAlign: "center", marginTop: "12px" }}>
                        <h1>{detailsData?.name}</h1>
                      </div>
                      <hr />
                      <div style={{ textAlign: "center", marginTop: "12px" }}>
                        <h3>Rs: {detailsData?.price}</h3>
                      </div>
                      <hr />
                      <div className="discription-section">
                        <div>
                          <h4>DESCRIPTION</h4>
                        </div>
                        <p>{detailsData?.description}</p>
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
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsItem;
