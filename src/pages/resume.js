import React from "react";
// import { TemplateWrapper } from "../layouts";

import "../styles/resume.css";

export default function Resume({ data }) {
  return (
    <div className="resume-container roboto mw8">
      <div className="resume-header">
        <div className="f2 bg-black white pa3 pb2 ">Connor Buchko</div>
      </div>
      <div className="resume-content">
        <div className="bg-black white pa3">
          <div className="resume-section-header b">CONTACT</div>
          <div>connorbuchko2010@yahoo.ca</div>
          <div>(204) 998-3636</div>
          <div className="">connorbuchko.com</div>
          <div className="resume-section-header b pt4">EDUCATION</div>
          <div className="">Bachelor of Software Engineering</div>
          <div className="">University of Victoria</div>
          <div className="">Sept. 2017 - Present</div>
          <div className="resume-section-header b pt4">SKILLS</div>
          <div className="b pb2">Languages</div>
          <div className="resume-skills-languages">
            <div className="grid-item">JavaScript</div>
            <div className="grid-item">TypeScript</div>
            <div className="grid-item">C#</div>
            <div className="grid-item">C</div>
          </div>
          <div className="b pb2 pt3">Technologies</div>
          <div className="resume-skills-technologies">
            <div className="grid-item">Git</div>
            <div className="grid-item">React</div>
            <div className="grid-item">Jekyll</div>
            <div className="grid-item">Gatsby</div>
            <div className="grid-item">Firebase</div>
            <div className="grid-item">Unity</div>
            <div className="grid-item">WDIO</div>
            <div className="grid-item">MaterialUI</div>
          </div>
          <div className="pt3 pb2 b">Other Notable Skills</div>
          <div className="flex justify-around">
            <div>UI / UX Design </div>
            <div>Agile</div>
          </div>
          <div className="resume-section-header b pt4">INTERESTS</div>
          <div className="b">Creative Writing</div>
          <div>
            Passionate about writing, whether it's stories, comedy, or my blog.
          </div>
          <div className="b pt2">Music</div>
          <div>
            Currently learning guitar and have played trombone and piano.
          </div>
          <div className="b pt2">Video Editing</div>
          <div>
            Love making comedic videos, one of my creations can be found{" "}
            <a href="https://www.youtube.com/watch?v=G8twOFFJqhM&t">here</a> or
            on my website.
          </div>
          <div></div>
        </div>
        <div className="pa3 pl4 mw65">
          <div className="resume-section-header">EXPERIENCE</div>
          <div className="experience-header">
            <div className="b">Software Developer Co-op</div>
            <div>Jan. 2021 - Aug. 2021</div>
          </div>
          <div className="">Thrive CRM Software Inc.</div>
          <ul className="resume-list">
            <li>
              Developed the real estate agent CRM "Reach for Agents". Used <b>React</b>
              with <b>TypeScript</b> to implement features, fix bugs and design
              components.
            </li>
            <li>
              Integrated the <b>Google Calendar API</b> into the CRM's calendar
              component. Involved working intimately with React Component libraries,
              combining in-house logic with library components.
            </li>
            <li>
              Worked with the backend platform <b>Firebase</b>, learning the importance of efficiency when 
              querying and writing to the database.
            </li>
            <li>
              Part of an intimate startup team where I was frequently left to my
              own devices and required self direction.
            </li>
          </ul>
          <div className="experience-header">
            <div className="b">Quality Assurance Analyst Co-op</div>
            <div>Sept. 2019 - Dec. 2019</div>
          </div>
          <div className="">VertiGIS</div>
          <ul className="resume-list">
            <li>
              Found and reported defects in upcoming generations of Geocortex
              App Designer, demanding effective and concise communication skills
            </li>
            <li>
              Tested and approved developer pull requests through Azure DevOps,
              gaining a strong appreciation for software quality and test-driven
              development.
            </li>
            <li>
              Wrote functional automated testing scripts using typescript,
              helping my team complete two regression cycles and minimize issues
              before pushing to production.
            </li>
            <li>
              Worked in an agile team, learning about the methodology and its
              importance in a technological workplace.
            </li>
          </ul>
          <div className="resume-section-header">PROJECTS</div>
          <div className="b">Gatsby Web Development</div>
          <div>
            Designed a personal portfolio and blog website using <b>React</b>,{" "}
            <b>TypeScript</b> and <b>Gatsby</b>. It is hosted by GitHub Pages at{" "}
            <a href="https://connorbuchko.com/">connorbuchko.com</a>.
          </div>
          <div className="b pt3">Unity Game Development</div>
          <div>
            Continuously experimenting with the Unity game engine using{" "}
            <b>C#</b>. Recently published my first finished game to{" "}
            <a href="https://cbuchko.itch.io/drillgame">itch.io</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
