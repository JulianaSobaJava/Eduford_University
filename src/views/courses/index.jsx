import React from "react";
import "../../styles/coursesViews.scss";

export default function Courses() {
  return (
    <section className="course comum">
      <h1>Courses We Offer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="row">
        <div className="rowcol">
          <h3>Beginner</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            aperiam ipsum dolorum, sunt magni debitis omnis qui non voluptatem
            molestias neque.
          </p>
        </div>
        <div className="rowcol">
          <h3>Upper</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            aperiam ipsum dolorum, sunt magni debitis omnis qui non voluptatem
            molestias neque.
          </p>
        </div>
        <div className="rowcol">
          <h3>Intermediate</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            aperiam ipsum dolorum, sunt magni debitis omnis qui non voluptatem
            molestias neque.
          </p>
        </div>
      </div>
    </section>
  );
}
