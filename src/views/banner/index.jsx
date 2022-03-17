import React from "react";
import "../../styles/banner.scss";

export default function Banner({ title }) {
  return (
    <div className="bannerCommun">
      <h1>{title}</h1>
    </div>
  );
}
