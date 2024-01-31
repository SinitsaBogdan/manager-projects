import React from "react";
import "./Description.scss";
import "./DescriptionMedia.scss";

export default function Description({content}) {
  return <div className="Description">
    <h2>Описание</h2>
    <p>{content}</p>
  </div>;
}
