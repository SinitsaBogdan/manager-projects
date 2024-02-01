import React from "react";
import "./Modul.scss";
import "./ModulMedia.scss";

export default function Modul({ props }) {
    return (
        <div className="Modul">
            <h2 className="Modul__title">{props.title}</h2>
        </div>
    );
}
