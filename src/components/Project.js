import React from "react";
import Img from "gatsby-image";

export default function Project({ title, img, gif, body, link }) {
  return (
    <div className="mv3 mh3 br2 project-container">
      <a className="no-underline" href={link} target="_blank" rel="noreferrer">
        <img class="project-image br5 z-4" src={img} />
        <div class="project-info pa4 flex h-100 w-100">
          <div className="project-spacing h-100">
            <div className="f5 lh-title">{body}</div>
            {link && <img className="project-link mv3" src="/github.png" />}
          </div>
        </div>
        <img class="gif br5" src={gif} />
      </a>
    </div>
  );
}
