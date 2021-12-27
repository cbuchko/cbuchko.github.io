import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import "../styles/tachyons.css";
import "../styles/blog.css";
import "../styles/home.css";
import Experience from "../components/Experience.js";
import Project from "../components/Project.js";
import Carousel from "react-elastic-carousel";
// import CarouselItem from "../components/CarouselItem";

import { TemplateWrapper } from "../layouts/index";
import CarouselItem from "../components/CarouselItem";

const headerChildren = (
  <div className="m0 mb5 bg-lightest-blue curved">
    <div className="hero pt6 ">
      <div className="message flex flex-column justify-center">
        <div className="tagline f5 pb2 flex">
          <div className="pr2">I code.</div>
          <div className="pr2">I write.</div>
          <div className="pr2">I create.</div>
        </div>
        <div className="title f1 b">Welcome to my Blog and Portfolio</div>
        <div className="about-me f4 pt4 roboto lh-copy">
          I'm a 5th year Software Engineering student at the University of
          Victoria, currently pursuing a Co-op position for the Fall of 2022.
        </div>
        <div className="CTA-container pt5">
          <a href="#experience">
            <div className="CTA" type="button">
              VIEW MY WORK
            </div>
          </a>
        </div>
      </div>
      <div className="graphic flex justify-end">
        <img class="w-70" src="/cartoon.png" alt="drawing of me" />
      </div>
    </div>
    <svg
      id="wave"
      style={{ transform: "rotate(0deg);", transition: "0.3s" }}
      viewBox="0 50 1440 330"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ transform: "translate(0, 0px);", opacity: "1" }}
        fill="white"
        d="M0,152L60,139.3C120,127,240,101,360,101.3C480,101,600,127,720,171C840,215,960,279,1080,285C1200,291,1320,241,1440,209C1560,177,1680,165,1800,145.7C1920,127,2040,101,2160,126.7C2280,152,2400,228,2520,228C2640,228,2760,152,2880,145.7C3000,139,3120,203,3240,228C3360,253,3480,241,3600,209C3720,177,3840,127,3960,139.3C4080,152,4200,228,4320,272.3C4440,317,4560,329,4680,323C4800,317,4920,291,5040,291.3C5160,291,5280,317,5400,278.7C5520,241,5640,139,5760,133C5880,127,6000,215,6120,215.3C6240,215,6360,127,6480,133C6600,139,6720,241,6840,234.3C6960,228,7080,114,7200,57C7320,0,7440,0,7560,50.7C7680,101,7800,203,7920,209C8040,215,8160,127,8280,82.3C8400,38,8520,38,8580,38L8640,38L8640,380L8580,380C8520,380,8400,380,8280,380C8160,380,8040,380,7920,380C7800,380,7680,380,7560,380C7440,380,7320,380,7200,380C7080,380,6960,380,6840,380C6720,380,6600,380,6480,380C6360,380,6240,380,6120,380C6000,380,5880,380,5760,380C5640,380,5520,380,5400,380C5280,380,5160,380,5040,380C4920,380,4800,380,4680,380C4560,380,4440,380,4320,380C4200,380,4080,380,3960,380C3840,380,3720,380,3600,380C3480,380,3360,380,3240,380C3120,380,3000,380,2880,380C2760,380,2640,380,2520,380C2400,380,2280,380,2160,380C2040,380,1920,380,1800,380C1680,380,1560,380,1440,380C1320,380,1200,380,1080,380C960,380,840,380,720,380C600,380,480,380,360,380C240,380,120,380,60,380L0,380Z"
      ></path>
    </svg>
  </div>
);

const footerChildren = (
  <div id="contact" className="pt4 pb6 bg-lightest-blue flex justify-center">
    <div className="contact-form pr5">
      <div>
        <h1 className="section-header">Let's get in contact!</h1>
      </div>
      <form
        className="pt3"
        action="https://formspree.io/f/xdoyjrov"
        method="POST"
        id="my-form"
        autoComplete="off"
      >
        <label className="label">
          <b>Name</b>

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
        </label>
        <label className="label">
          <b>Email</b>

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
        </label>
        <label className="label">
          <b>Message</b>
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
        </label>
        <div class="">
          <button
            className="submit pv2 flex justify-center items-center"
            type="submit"
          >
            <div className="">SEND</div>
            <img className="airplane ph3" src="/airplane.png" alt="send icon" />
          </button>
        </div>
      </form>
    </div>
    <div className="contact-me w-20 flex flex-column justify-center items-center pl5">
      <img class="br-100" src="/headshot.jpg" alt="headshot" />
      <div className="mw5 pt3 lh-copy">
        I'd love to hear from you, whether you have any questions, feedback or
        if you just want to talk!
      </div>
      <div className="widgets mt3">
        <div className="w-20">
          <a href="https://github.com/cbuchko" target="_blank" rel="noreferrer">
            <img className="" src="/github.png" alt="github" />
          </a>
        </div>
        <div className="w-20">
          <a
            href="https://www.linkedin.com/in/connor-buchko-17932116a/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

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
      <h1 id="experience" className="section-header tc">
        Experience
      </h1>
      <div className="resume-block tc mb5">
        Check out my {/*<Link to="/resume">Resume</Link>  */}
        <a
          className="homelink"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>{" "}
        for more detailed descriptions.
      </div>
      <div className="experience-container flex justify-center">
        <Experience
          title="Software Developer"
          length="8"
          url="https://reachforagents.com/"
          imgref="/Reach.png"
          body={
            <>
              At{" "}
              <a
                className="homelink"
                href="https://reachforagents.com/"
                target="_blank"
                rel="noreferrer"
              >
                Reach
              </a>
              , I used <b>React</b> with <b>TypeScript</b> to develop their real
              estate agent customer relationship manager. Most notably, I
              overhauled the calendar component, working intimately with the
              <b> Google API</b> and <b>Firebase</b> to integrate Google
              Calendar.
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
      <h1 className="section-header tc mt7 mb5">Projects</h1>
      <div>
        <div className="projects-container flex justify-center">
          <Project
            title="Survival Game"
            img="/gameexamplestatic.PNG"
            gif="/gameexamplegif.gif"
            body="A survival game made in Unity with C#. All of the assets and animations were drawn in Aseprite."
            link="https://github.com/cbuchko/gamedev"
            imgType="git"
          />
          <Project
            title="Platforming Game"
            img="/motherload.PNG"
            gif="/motherloadgif.gif"
            body="My first published Unity project: a mining survival game. Fully playable on itch.io."
            link="https://cbuchko.itch.io/drillgame"
            imgType="itch"
          />
          <Project
            title="Multiplayer Racing Game"
            img="/racegamestatic.PNG"
            gif="/racegamegif.gif"
            body="A multiplayer platforming race game made without an engine, using JavaScript and Socket.io."
            link="https://github.com/cbuchko/race-game"
            imgType="git"
          />
          <Project
            title="Focus Frames"
            img="/focusframes.png"
            gif="/focusframes.png"
            body="A fun comedy skit I made as the final presentation for a class."
            link="https://www.youtube.com/watch?v=G8twOFFJqhM"
            imgType="youtube"
          />
        </div>
      </div>
      <h1 className="section-header tc mt7 mb5">Featured Blog Posts</h1>
      <Carousel
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
      <div className="bloglink flex justify-end mt4">
        <Link className="CTA" title="blog" to="/blog">
          {"EXPLORE MY BLOG"}
        </Link>
      </div>
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
          excerpt(pruneLength: 200)
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
