import { Link } from "react-router-dom";
import "../../styles/button.scss";

export default function Button({ link, text, id }) {
  return (
    <Link to={link} className="btn" id={id}>
      {text}
    </Link>
  );
}
