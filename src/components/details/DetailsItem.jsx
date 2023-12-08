import React, { useState } from "react";
import "../sharedCss/shared.css";
import { useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  DialogActions
} from "@mui/material";

const DetailsItem = ({ home }) => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleclose = () =>{
    setOpen(false)
  }
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="imges-section">
                {home
                  .filter((item) => item.id === id)
                  .map((data, i) => {
                    return (
                      <div key={i}>
                        <div
                          //   to={`/detailsitem/${home.id}/`}
                          //   style={({}) => ({
                          //     textDecoration: "none",
                          //     color: "#000",
                          //   })}
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          <div className="card">
                            <div className="imge">
                              <h2>{data.name}</h2>
                              <img src={data.img} alt="home" />
                              <h3>$: {data.price}</h3>
                              <button onClick={() => setOpen(true)}>
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
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
            <Button onClick={handleclose} variant="contained" color="success">
              Place Order
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default DetailsItem;
