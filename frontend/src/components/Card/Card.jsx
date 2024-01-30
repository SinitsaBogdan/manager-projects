import React from "react";
import "./Card.scss";
import "./CardMedia.scss";

export default function Card({ content }) {
    return (
        <div className="Card">
            <div className="column">
                <p className="number">{content.id}</p>
                <h2 className="title">{content.title}</h2>
                <p className="Card__type">{content.site_type}</p>
            </div>

            {content.description != "" && (
                <p className="description">{content.description}</p>
            )}
            {content.note != "" && <p className="note">{content.note}</p>}

            <div className="row">
                <div className="wrapper">
                    <p className="btn">{content.priority}</p>
                    <p className="btn">{content.execution_status}</p>
                </div>
                <div className="wrapper">
                    <a href={content.url_git} className="btn">
                        GIT
                    </a>
                    <a href={content.url_task_board} className="btn">
                        TASK BOARD
                    </a>
                    <a href={content.url_miro} className="btn">
                        MIRO
                    </a>
                    <a href={content.url_figma} className="btn">
                        FIGMA
                    </a>
                </div>
            </div>
        </div>
    );
}
