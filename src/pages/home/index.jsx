import React from "react";
import "../../styles/home.scss";
import * as Icons from "react-icons/fa";
import Button from "../../components/button/index";
import Courses from "../../views/courses";
import london from "../../image/london.png";
import newyork from "../../image/newyork.png";
import washington from "../../image/washington.png";
import Facilities from "../../views/facilities";
import user1 from "../../image/user1.jpg";
import user2 from "../../image/user2.jpg";

export default function Home() {
  return (
    <>
      <div className="banner">
        <h1>Word's Biggest University</h1>
        <p>
          Making Website is now one of the easiest way thing in the world. You
          just need to learn HTML, CSS,
          <br /> JavaScript and you are good to go.
        </p>
        <Button link="/" className="btn" text="Visit Us to Know More" />
      </div>
      <main>
        <Courses />
        <section className="campus comum">
          <h1>Our Global Campus</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="row">
            <div className="campuscol">
              <img src={london} alt="" />
              <div className="layer">
                <h3>London</h3>
              </div>
            </div>
            <div className="campuscol">
              <img src={newyork} alt="" />
              <div className="layer">
                <h3>New York</h3>
              </div>
            </div>
            <div className="campuscol">
              <img src={washington} alt="" />
              <div className="layer">
                <h3>Washington</h3>
              </div>
            </div>
          </div>
        </section>
        <Facilities />

        <section className="testimonials comum">
          <h1>Testimonials</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="row">
            <div className="testimonialcol">
              <img src={user1} alt="" />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing suscipit
                  doloribus corrupti facilis accusantium odio blanditiis
                  incidunt temporibus ut necessitatibus tenetur.
                </p>
                <h3>Marinela De Jesus</h3>
                <Icons.FaStar className="star" />
                <Icons.FaStar className="star" />
                <Icons.FaStar className="star" />
                <Icons.FaStar className="star" />
                <Icons.FaStar className="star" />
              </div>
            </div>
            <div className="testimonialcol">
              <img src={user2} alt="" />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing suscipit
                  doloribus corrupti facilis accusantium odio blanditiis
                  incidunt temporibus ut necessitatibus tenetur.
                </p>
                <h3>Félix Matumona</h3>
                <Icons.FaStar className="star" />
                <Icons.FaStar className="star" />
                <Icons.FaStar className="star" />
                <Icons.FaStar className="star" />
                <Icons.FaStarHalfAlt className="star" />
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <h1>
            Enroll For Our Various Online Courses
            <br /> Anywhere From The World
          </h1>
          <Button link="/" className="btn" text="Contact Us" />
        </section>
      </main>
    </>
  );
}
