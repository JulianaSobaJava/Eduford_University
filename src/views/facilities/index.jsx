import React from "react";
import "../../styles/facilities.scss";
import library from "../../image/library.png";
import basketball from "../../image/basketball.png";
import cafeteria from "../../image/cafeteria.png";

export default function Facilities() {
  return (
    <section className="facilities comum">
      <h1>Facilities</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="row">
        <div className="facilitiescol">
          <img src={library} alt="" />
          <h3>Word Class Library</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            facere vel ab?
          </p>
        </div>
        <div className="facilitiescol">
          <img src={basketball} alt="" />
          <h3>Largest Play Ground</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            facere vel ab?
          </p>
        </div>
        <div className="facilitiescol">
          <img src={cafeteria} alt="" />
          <h3>Tasty and Healthy Food</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            facere vel ab?
          </p>
        </div>
      </div>
    </section>
  );
}
