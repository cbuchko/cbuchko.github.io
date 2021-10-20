import React from "react";

export default function Project({ title, img, gif, body, link }) {
  return (
    <div className="br2 project-container">
      <a className="no-underline" href={link} target="_blank" rel="noreferrer">
        <img class="project-image br5 z-4" src={img} alt="project"/>
        <div class="project-info pa4 flex h-100 w-100">
          <div className="project-spacing h-100">
            <div className="f5 lh-title">{body}</div>
            {link && <img className="project-link mv3" src="/github.png" alt="github link" />}
          </div>
        </div>
        <img class="gif br5" src={gif} alt="project gif"/>
      </a>
    </div>
  );
}
