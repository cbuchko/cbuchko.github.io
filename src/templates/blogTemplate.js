import React from "react";
import { graphql } from "gatsby";
import { TemplateWrapper } from "../layouts/index";
import Img from "gatsby-image";
import Link from "gatsby-link";
import "../styles/blog.css";
import formatDate from "../util/formatDate";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <TemplateWrapper>
      <div class="post mt5">
        <Link className="link f4" title="Blog" to="/blog">
          &lt; Back
        </Link>
        <h1 class="blog-post-title f2">{frontmatter.title}</h1>
        <span class="post-date">{formatDate(frontmatter.publishDate)}</span>
        <div name="post body" class="mt5">
          <Img className="blog-image br3" fluid={featuredImgFluid} />
          <div
            class="blog-text mt5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        publishDate
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        date
        slug
      }
    }
  }
`;
