import React, { useState } from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import Img from "gatsby-image";
import "../styles/tachyons.css";
import "../styles/blog.css";
import SearchBar from "../components/SearchBar";

import { TemplateWrapper } from "../layouts/index";

const BlogImage = (edge) => {
  let featuredImgFluid =
    edge.node.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <div class="flex w-50 pv5 justify-center-ns items-center">
      <Img className="w-75 br3" fluid={featuredImgFluid} />
    </div>
  );
};

const BlogText = (edge) => {
  return (
    <div class="blog-content w-50">
      <div
        name="header"
        class="blog-header mt5 pa3 bg-lightest-blue br3 shadow-5"
      >
        <div name="title" class="f2">
          {edge.node.frontmatter.title}
        </div>
        <div name="date" class="f5 mt1 gray">
          {edge.node.fields.date}
        </div>
      </div>
      <div name="excerpt" class="blog-text f4 pv4 lh-large">
        {edge.node.excerpt}
      </div>
    </div>
  );
};

const BlogContainer = ({ slug, children }) => {
  return (
    <Link className="link" to={`/${slug}`}>
      <div className="pv4 bb-ns bw1-ns b--moon-gray">
        <div class="flex h6 ">{children}</div>
      </div>
    </Link>
  );
};

export default function Blog({ data }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilter = (e) => {
    e === filter ? setFilter("") : setFilter(e);
  };
  const filteredBlogs = data.allMarkdownRemark.edges.filter(
    (edge) =>
      (`${edge.node.frontmatter.title} ${edge.node.excerpt}`
        .toLowerCase()
        .includes(search.toLowerCase()) ||
        search === "") &&
      (edge.node.frontmatter.category === filter || filter === "")
  );
  const blogList = filteredBlogs.map((edge, index) => {
    const slug = edge.node.fields.slug;
    if (index % 2) {
      return (
        <BlogContainer slug={slug}>
          {BlogImage(edge)}
          {BlogText(edge)}
        </BlogContainer>
      );
    } else {
      return (
        <BlogContainer slug={slug}>
          {BlogText(edge)}
          {BlogImage(edge)}
        </BlogContainer>
      );
    }
  });

  const filterColor = (filterType) =>
    filterType === filter ? { color: "#cdecff", borderColor: "black" } : {};
  return (
    <TemplateWrapper>
      <div class="f4 pt6 pb4 blog-tagline">
        This is where I obsess about Survivor and have strong opinions on shows
        that no one watches.
        <div class="flex items-center mt4">
          <SearchBar
            handleSearch={handleSearch}
            placeholderText="search"
            searchVal={search}
            isSticky={false}
          />
          <ul class="filter">
            <li
              style={filterColor("survivor")}
              onMouseDown={() => handleFilter("survivor")}
              class="first-li"
            >
              Survivor
            </li>
            <li
              style={filterColor("tv")}
              onMouseDown={() => handleFilter("tv")}
            >
              TV Reviews
            </li>
            <li
              style={filterColor("community")}
              onMouseDown={() => handleFilter("community")}
            >
              Creative Writing
            </li>
          </ul>
        </div>
      </div>
      <div>{blogList}</div>
    </TemplateWrapper>
  );
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fileAbsolutePath: { regex: "/[0-9]{4}-[0-9]{2}-[0-9]{2}-.*/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 230)
          frontmatter {
            title
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
            date
          }
        }
      }
    }
  }
`;
