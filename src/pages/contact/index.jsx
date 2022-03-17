import React from "react";
import Banner from "../../views/banner";
import * as Icons from "react-icons/fa";

import "../../styles/contact.scss";

export default function Contact() {
  return (
    <>
      <Banner title="Contact Us" />
      <main>
        <section className="location comum">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.583515078251!2d13.244952314260459!3d-8.82513849366245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3cbc57e8ce7%3A0x2f4f861c202a76b1!2sInstituto%20Polit%C3%A9cnico%20Industrial%20de%20Luanda%20(IPIL)!5e0!3m2!1spt-PT!2sao!4v1633986198939!5m2!1spt-PT!2sao"
            width="1000"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps"
          ></iframe>
        </section>
        <section className="contact-us">
          <div className="row">
            <div className="contact-col">
              <div>
                <Icons.FaHome className="fas" />
                <span>
                  <h5>XYZ Road, ABC Building</h5>
                  <p>Bangala, Wonder, IN</p>
                </span>
              </div>
              <div>
                <Icons.FaPhone className="fas" />
                <span>
                  <h5>+244 974-642-483</h5>
                  <p>Mondey to Saturday, 10AM to 6PM </p>
                </span>
              </div>
              <div>
                <Icons.FaEnvelope className="fas" />
                <span>
                  <h5>info@easytoturial.com</h5>
                  <p>Email Us Your Query </p>
                </span>
              </div>
            </div>
            <div className="contact-col">
              <form method="post">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Adress"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  required
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  rows="8"
                ></textarea>
                <button type="submit" className="btn" id="btn-red">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
