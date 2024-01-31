import React from "react";
import "./Note.scss";
import "./NoteMedia.scss";

export default function Note({content}) {
  return <div className="Note">
    <h2>Заметки</h2>
    <p>{content}</p>
  </div>;
}
