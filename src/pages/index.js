import React, { useState } from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import Img from "gatsby-image";
import "../styles/tachyons.css";
import "../styles/blog.css";
import "../styles/home.css";
import SearchBar from "../components/SearchBar";
import Experience from "../components/Experience.js";
import Project from "../components/Project.js";
import Carousel from "react-elastic-carousel";
// import CarouselItem from "../components/CarouselItem";

import { TemplateWrapper } from "../layouts/index";
import CarouselItem from "../components/CarouselItem";

const headerChildren = (
  <div className="m0 pt6 mb5 bg-lightest-blue curved">
    <div className="f4 message pb3 flex">
      <div className="fade-in-code pr2">I code.</div>
      <div className="fade-in-write pr2">I write.</div>
      <div className="fade-in-create pr2">I create.</div>
    </div>
    <div className="flex justify-between items-center">
      <div className="message">
        <div className="f1 b">Welcome to my Blog and Portfolio</div>
        <div className="f4 pt4 pr7 roboto lh-copy">
          I'm Connor Buchko, a 5th year Software Engineering student at the
          University of Victoria. My passion is storytelling, whether I'm
          designing software, making blog posts, or writing short stories. I'm
          currently pursuing a Co-op position for the fall of 2022.
        </div>
      </div>
      <img class="w5 h-100 br-100 headshot" src="/headshot.jpg" />
    </div>
    <svg
      id="wave"
      style={{ transform: "rotate(0deg);", transition: "0.3s" }}
      viewBox="0 0 1440 329"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(162, 219, 255, 1)" offset="0%"></stop>
          <stop stop-color="rgba(205, 236, 255, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style={{ transform: "translate(0, 0px);", opacity: "1" }}
        fill="white"
        d="M0,152L60,139.3C120,127,240,101,360,101.3C480,101,600,127,720,171C840,215,960,279,1080,285C1200,291,1320,241,1440,209C1560,177,1680,165,1800,145.7C1920,127,2040,101,2160,126.7C2280,152,2400,228,2520,228C2640,228,2760,152,2880,145.7C3000,139,3120,203,3240,228C3360,253,3480,241,3600,209C3720,177,3840,127,3960,139.3C4080,152,4200,228,4320,272.3C4440,317,4560,329,4680,323C4800,317,4920,291,5040,291.3C5160,291,5280,317,5400,278.7C5520,241,5640,139,5760,133C5880,127,6000,215,6120,215.3C6240,215,6360,127,6480,133C6600,139,6720,241,6840,234.3C6960,228,7080,114,7200,57C7320,0,7440,0,7560,50.7C7680,101,7800,203,7920,209C8040,215,8160,127,8280,82.3C8400,38,8520,38,8580,38L8640,38L8640,380L8580,380C8520,380,8400,380,8280,380C8160,380,8040,380,7920,380C7800,380,7680,380,7560,380C7440,380,7320,380,7200,380C7080,380,6960,380,6840,380C6720,380,6600,380,6480,380C6360,380,6240,380,6120,380C6000,380,5880,380,5760,380C5640,380,5520,380,5400,380C5280,380,5160,380,5040,380C4920,380,4800,380,4680,380C4560,380,4440,380,4320,380C4200,380,4080,380,3960,380C3840,380,3720,380,3600,380C3480,380,3360,380,3240,380C3120,380,3000,380,2880,380C2760,380,2640,380,2520,380C2400,380,2280,380,2160,380C2040,380,1920,380,1800,380C1680,380,1560,380,1440,380C1320,380,1200,380,1080,380C960,380,840,380,720,380C600,380,480,380,360,380C240,380,120,380,60,380L0,380Z"
      ></path>
    </svg>
  </div>
);

const footerChildren = (
  <div className="contact pt4 pb7 bg-lightest-blue flex flex-column justify-center">
    <h1 className="">Let's get in contact!</h1>
    <form
      className="pt3"
      action="https://formspree.io/f/xdoyjrov"
      method="POST"
      id="my-form"
      autoComplete="off"
    >
      <div className="label"><b>Name</b></div>
      <div class="form-group">
        <input
          className="input-box"
          type="text"
          name="username"
          size="30"
          autoComplete="off"
          required
        />
      </div>
      <div className="label"><b>Email</b></div>
      <div class="form-group">
        <input
          className="input-box"
          type="text"
          name="source"
          size="30"
          autoComplete="off"
          required
        />
      </div>
      <div className="label"><b>Message</b></div>
      <div class="form-group">
        <textarea
          className="input-box"
          name="message"
          id="message"
          cols="33"
          rows="5"
          required
        ></textarea>
      </div>
      <div class="">
        <button
          className="submit pv2 flex justify-center items-center"
          type="submit"
        >
          <div>Send</div>
          <img className="airplane ph3" src="/airplane.png" />
        </button>
      </div>
    </form>
  </div>
);

const breakPoints = [{ width: 1, itemsToShow: 1 }];

export default function Home({ data }) {
  const blogs = data.allMarkdownRemark.edges;
  const carouselRef = React.useRef(null);
  const carouselLength = blogs.length;
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(carouselLength);
    }
  };

  return (
    <TemplateWrapper
      headerChildren={headerChildren}
      footerChildren={footerChildren}
    >
      <h1 className="tc">Experience</h1>
      <div className="tc mb5">
        Check out my{" "}
        <a
          className="homelink"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Résumé
        </a>{" "}
        for more detailed descriptions.
      </div>
      <div className="flex justify-around">
        <Experience
          title="Software Developer"
          length="8"
          url="https://reachforagents.com/"
          imgref="/Reach.png"
          body={
            <>
              At Thrive Customer Relationship Manager (CRM) Software, I used{" "}
              <b>React</b> with <b>TypeScript</b> to develop their real estate
              agent CRM{" "}
              <a
                className="homelink"
                href="https://reachforagents.com/"
                target="_blank"
                rel="noreferrer"
              >
                Reach
              </a>
              . Most notably, I overhauled the calendar component, working
              intimately with the
              <b> Google API</b> to integrate Google Calendar.
            </>
          }
        />
        <Experience
          title="Quality Assurance Analyst"
          length="4"
          url="https://www.geocortex.com/"
          imgref="/geocortex.png"
          body={
            <>
              At VertiGIS, I did QA for{" "}
              <a
                className="homelink"
                href="https://www.geocortex.com/"
                target="_blank"
                rel="noreferrer"
              >
                Geocortex{" "}
              </a>
              as part of an agile team. My responsibilities were to test pull
              requests, report bugs, and write automated functional tests using{" "}
              <b>WebDriverIO</b>, <b>Mocha</b> and <b>TypeScript</b>.
            </>
          }
        />
      </div>
      <h1 className="tc mt7 mb5">Projects</h1>
      <div>
        <div className="flex justify-center">
          <Project
            title="Survival Game"
            img="/gameexamplestatic.png"
            gif="/gameexamplegif.gif"
            body="A survival game made in Unity with C#. All of the assets and animations were drawn in Asesprite."
            link="https://github.com/cbuchko/gamedev"
          />
          <Project
            title="Platforming Game"
            img="/platformerexamplestatic.png"
            gif="/platformerexamplegif.gif"
            body="A side-scrolling platforming game made in Unity with C#. Developed with an emphasis on jumping physics."
          />
          <Project
            title="Multiplayer Racing Game"
            img="/racegamestatic.png"
            gif="/racegamegif.gif"
            body="A multiplayer platforming race game made without an engine, using JavaScript and Socket.io."
            link="https://github.com/cbuchko/race-game"
          />
        </div>
        <div className="project-shelf bg-lightest-blue pv3 mh6 br-pill">
          &nbsp;
        </div>
      </div>
      <h1 className="tc mt7 mb5">Featured Blog Posts</h1>
      <Carousel
        breakPoints={breakPoints}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
      >
        {blogs.map((edge, index) => (
          <CarouselItem
            key={index}
            title={edge.node.frontmatter.title}
            img={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
            slug={edge.node.fields.slug}
            body={edge.node.excerpt}
          />
        ))}
      </Carousel>
    </TemplateWrapper>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: {
        fileAbsolutePath: { regex: "/[0-9]{4}-[0-9]{2}-[0-9]{2}-.*/" }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 230)
          frontmatter {
            title
            category
            featured
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
