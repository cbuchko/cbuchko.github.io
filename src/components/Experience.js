import React from "react";

export default function Project({ title, length, url, imgref, body }) {
  return (
    <div className="experience">
      <div className="tc f4 b">{title}</div>
      <div className="tc">{length} month Co-op</div>
      <a href={url} target="_blank" rel="noreferrer">
        <img className="experience-image" src={imgref} />
      </a>
      <div name="Reach Body" className="pv3 lh-copy">
        {body}
      </div>
    </div>
  );
}
