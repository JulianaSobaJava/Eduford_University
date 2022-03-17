import React from "react";
import Button from "../../components/button/index";
import Banner from "../../views/banner";
import about from "../../image/about.jpg";
import "../../styles/about.scss";

export default function About() {
  return (
    <>
      <Banner title="About Us" />
      <main>
        <section className="about-us">
          <div className="row">
            <div className="aboutuscol">
              <h1>We Are The World Largest's University</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                fuga debitis at illo eos possimus molestiae animi id culpa?
                Molestias exercitationem impedit praesentium maxime, autem
                nesciunt cum sed perferendis nemo quibusdam expedita et.
              </p>
              <Button text="Explore Now" link="/" id="btn-red" />
            </div>
            <div className="aboutuscol">
              <img src={about} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
