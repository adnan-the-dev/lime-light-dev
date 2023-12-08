import React from "react";
import Card from "../card/Card";
const Home = ({ home }) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <Card home={home} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
