import React, { useState } from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import Img from "gatsby-image";
import "../styles/tachyons.css";
import "../styles/blog.css";
import SearchBar from "../components/SearchBar";
import { useWindowSize } from "../components/useWindowSize";
import formatDate from "../util/formatDate";

import { TemplateWrapper } from "../layouts/index";

const FilterBlog = ({ filterColor, handleFilter, mobile }) => {
  return (
    <ul class="filter">
      <li
        key="survivor"
        style={filterColor("survivor")}
        onMouseDown={() => handleFilter("survivor")}
        class="first-li"
      >
        Survivor
      </li>
      <li
        key="tv"
        style={filterColor("tv")}
        onMouseDown={() => handleFilter("tv")}
      >
        TV Reviews
      </li>
      <li
        key="community"
        style={filterColor("community")}
        onMouseDown={() => handleFilter("community")}
      >
        {mobile ? "Writing" : "Creative Writing"}
      </li>
    </ul>
  );
};
const BlogImage = (edge) => {
  let featuredImgFluid =
    edge.node.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <div class="blog-page-image flex w-50 pv5 justify-center items-center">
      <Img className="w-75 br3" fluid={featuredImgFluid} />
    </div>
  );
};

const BlogTitle = (edge) => {
  return (
    <div
      name="header"
      class="blog-header f2 mt5 pa3 bg-lightest-blue br3 shadow-5"
    >
      <div name="title">{edge.node.frontmatter.title}</div>
      <div name="date" class="f5 mt1 mid-gray">
        {formatDate(edge.node.frontmatter.publishDate)}
      </div>
    </div>
  );
};

const BlogExcerpt = (edge) => {
  return (
    <div name="excerpt" class="blog-page-text f4 pv4 lh-large">
      {edge.node.excerpt}
    </div>
  );
};

const BlogContainer = ({ slug, children }) => {
  return (
    <Link className="link" to={`/${slug}`}>
      <div className="pv4 bb-ns bw1-ns b--moon-gray">
        <div class="blog-container">{children}</div>
      </div>
    </Link>
  );
};

export default function Blog({ data }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const mobile = useWindowSize();

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
    if (mobile) {
      return (
        <BlogContainer slug={slug}>
          {BlogTitle(edge)}
          {BlogImage(edge)}
          {BlogExcerpt(edge)}
        </BlogContainer>
      );
    }
    if (index % 2) {
      return (
        <BlogContainer slug={slug}>
          {BlogImage(edge)}
          <div class="blog-content w-50">
            {BlogTitle(edge)}
            {BlogExcerpt(edge)}
          </div>
        </BlogContainer>
      );
    } else {
      return (
        <BlogContainer slug={slug}>
          <div class="blog-content w-50">
            {BlogTitle(edge)}
            {BlogExcerpt(edge)}
          </div>
          {BlogImage(edge)}
        </BlogContainer>
      );
    }
  });

  const filterColor = (filterType) =>
    filterType === filter ? { color: "#cdecff", borderColor: "black" } : {};
  return (
    <TemplateWrapper>
      <div class="f4 pt6 pb4 blogPage-header">
        <div class="blog-tagline">
          This is where I obsess about Survivor and have strong opinions on
          shows that no one watches.
        </div>
        <div class="blog-tools f4 flex items-center mt4">
          <SearchBar
            handleSearch={handleSearch}
            placeholderText="search"
            searchVal={search}
            isSticky={false}
          />
          <FilterBlog
            handleFilter={handleFilter}
            filterColor={filterColor}
            mobile={mobile}
          />
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
            slug
            date
          }
        }
      }
    }
  }
`;
