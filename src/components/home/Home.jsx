import React from "react";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import { Carousal } from "../carousal/Carousal";
const Home = () => {
  const data = useSelector((item)=>{
    return item.productSection
  })
  console.log(data);
  return (
    <>
      <section id="header" className="">
              <Carousal/>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <Card home={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
