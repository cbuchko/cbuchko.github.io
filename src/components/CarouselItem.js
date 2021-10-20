import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

export default function CarouselItem({ title, img, slug, body }) {
  return (
    <Link className="carousel-item w-100 flex justify-center" to={`/${slug}`}>
      <div className="carousel-info pa4 absolute z-5 br3">
        <div className="carousel-title f2">{title}</div>
        <div className="carousel-excerpt f4 mv4 pr7 lh-title">{body}</div>
      </div>
      <Img className="w-100 br3" fluid={img} />
    </Link>
  );
}
