import React, { useEffect } from "react";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import { Carousal } from "../carousal/Carousal";
import Category from "../catagorytype/Category";
import { NavLink } from "react-router-dom";
const Home = () => {
  const data = useSelector((item) => {
    return item.productSection
  })
  let catago = [
    {
      img: 'https://www.limelight.pk/cdn/shop/files/LL-Homepage_bubble_Women-15-Nov-23_300x.png?v=1700045851',
      name: 'WOMEN'
    },
    {
      img: 'https://www.limelight.pk/cdn/shop/files/LL-Homepage_bubble_Girls-15-Nov-23_300x.png?v=1700045873',
      name: 'GIRLS'
    },
    {
      img: 'https://www.limelight.pk/cdn/shop/files/LL-_bubble_image_for_Winter-Western-homepage-icon_300x.jpg?v=1701429766',
      name: 'WINTER Western'
    },
    {
      img: 'https://www.limelight.pk/cdn/shop/files/LL-Homepage_bubble_Accessories-15-Nov-23_300x.png?v=1700045907',
      name: 'ACCESSORIES'
    },
  ]
  let btnNewSale = ['Special Price', 'New On Sale', 'Best Seller']
  return (
    <>
      {/* <button onClick={()=>localStorage.setItem('hello',JSON.stringify(data))}>localStorage</button> */}
      <section id="header" className="">
        <Carousal />
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-15 mx-auto">
              <hr style={{ border: "2px solid #8f7960" }} />
              <h1 style={{ textAlign: 'center', color: 'black', fontWeight: "600" }}>Shop By Category</h1>
              <Category cat={catago} />
              <hr style={{ border: "2px solid #8f7960" }} />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                // gap: '3rem',
                marginTop: "2rem"
              }}>
                {
                  btnNewSale.map((item, i) => {
                    return (
                      <NavLink to={item} key={i}>
                        <button>{item}</button>
                      </NavLink>
                    )
                  })
                }
              </div>
              <div className="col-4 mx-auto">
                <hr style={{ border: "2px solid #8f7960", marginTop: '2rem' }} />

              </div>
              <h1 style={{ textAlign: 'center', color: 'black', fontWeight: "600" }}>New Arrivals</h1>
              <Card home={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;



