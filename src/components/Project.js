import React from "react";
import { useWindowSize } from "./useWindowSize";

const getImageAndLink = (link, mobile, imgType) => {
  const image = (imgType === "youtube") ? "/youtube.png" : (imgType === "itch") ? "/itchlogo.png" : "github.png";
  const linkToUse = (!mobile || imgType === "youtube") ? link : undefined;
  const showImage = (mobile && imgType === "youtube") || (!mobile && link);

  return { image, linkToUse, showImage };
};

export default function Project({ title, img, gif, body, link, imgType }) {
  const mobile = useWindowSize() < 900;

  const {image, linkToUse, showImage} = getImageAndLink(link, mobile, imgType)

  return (
    <div className="br2 project-container">
      <a
        className="no-underline disabled"
        href={linkToUse}
        target="_blank"
        rel="noreferrer"
      >
        <img class="project-image br5 z-4" src={img} alt="project" />
        <div class="project-info pa4 flex h-100 w-100">
          <div className="project-spacing h-100">
            <div className="f5 lh-title">{body}</div>
            {showImage && (
              <img
                className="project-link mv3"
                src={image}
                alt="github link"
              />
            )}
          </div>
        </div>
        <img class="gif br5" src={gif} alt="project gif" />
      </a>
    </div>
  );
}
