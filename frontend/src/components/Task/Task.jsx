import React from "react";
import "./Task.scss";
import "./TaskMedia.scss";

export default function Task({title, description}) {
    return (
        <div className="Task">
            <h2 className="Task__title">{title}</h2>
            <p className="Task__description">{description}</p>
        </div>
    );
}
