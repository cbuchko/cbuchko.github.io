import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

export const BlogImage = (edge) => {
  let featuredImgFluid =
    edge.node.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <div class="fl w-50 pv5">
      <Img className="w-75" fluid={featuredImgFluid} />
    </div>
  );
};

export const BlogText = (edge) => {
  return (
    <div class="fl w-50 pa2">
      <h2 class="post-title">
        <Link to={edge.node.fields.slug}>
          {edge.node.frontmatter.title}
        </Link>
      </h2>
      <span class="post-date">{edge.node.fields.date}</span>
      <div>{edge.node.excerpt}</div>
    </div>
  );
};
