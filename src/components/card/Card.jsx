import React from "react";
import { NavLink } from "react-router-dom";
import "../sharedCss/shared.css";
const Card = ({ home }) => {
  return (
    <div className="imges-section">
      {home.map((home, i) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default Card;
