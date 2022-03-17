import React from "react";
import * as Icons from "react-icons/fa";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <h4>About Us</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        sapiente accusantium
        <br /> hic maiores suscipit eligendi perspiciatis. Labore, amet.
      </p>
      <div className="icons">
        <Icons.FaFacebook className="fab" />
        <Icons.FaInstagram className="fab" />
        <Icons.FaTwitter className="fab" />
        <Icons.FaGithub className="fab" />
        <Icons.FaLinkedin className="fab" />
        <Icons.FaWhatsapp className="fab" />
        <Icons.FaFacebook className="fab" />
      </div>
      <p>
        Made with <Icons.FaHeart className="fas" /> by Easy Toturial
      </p>
    </footer>
  );
}
