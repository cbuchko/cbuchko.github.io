import React from "react";
// import { TemplateWrapper } from "../layouts";

import "../styles/resume.css";

export default function Resume({ data }) {
  return (
    <div className="resume-container roboto mw8">
      <div className="resume-content">
        <div className="bg-black white pa3">
          <div className="resume-name b bg-black white pb4">Connor Buchko</div>
          <div className="flex resume-section-header">
            <div className="b">CONTACT</div>
            <img className="header-icon-first" src="/contact-export.png" />
          </div>
          <div className="flex">
            <img className="contact-icon" src="/mail.png" />
            <div>connorbuchko2010@yahoo.ca</div>
          </div>
          <div className="flex pv1">
            <img className="contact-icon" src="/phone.jpg" />
            <div>(204) 998-3636</div>
          </div>
          <div className="flex white-visited">
            <img className="contact-icon" src="/web-export.png" />
            <a href="https://connorbuchko.com/">connorbuchko.com</a>
          </div>
          <div className="flex resume-section-header">
            <div className="b pt4">EDUCATION</div>
            <img className="header-icon" src="/cap.png" />
          </div>
          <div className="">Bachelor of Software Engineering</div>
          <div className="flex">
            <div>University of Victoria</div>
            <div className="pl3 ml2">(3.7 GPA)</div>
          </div>
          <div className="">Sept. 2017 - Present</div>
          <div className="flex resume-section-header">
            <div className="b pt4">SKILLS</div>
            <img className="header-icon" src="/skills-export-export.png" />
          </div>
          <div className="b pb2">Languages</div>
          <div className="resume-skills-languages">
            <div>JavaScript</div>
            <div>TypeScript</div>
            <div>C#</div>
            <div>C</div>
          </div>
          <div className="b pb2 pt4">Technologies</div>
          <div className="resume-skills-technologies">
            <div>Git</div>
            <div>React</div>
            <div>Jekyll</div>
            <div>Gatsby</div>
            <div>Firebase</div>
            <div>Unity</div>
            <div>MaterialUI</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
          <div className="pt4 pb2 b">Other Notable Skills</div>
          <div className="resume-skills-other">
            <div>UI / UX Design </div>
            <div>Agile</div>
            <div>Leadership</div>
            <div>Teamwork</div>
          </div>
          <div className="flex resume-section-header">
            <div className="b pt4">INTERESTS</div>
            <img className="header-icon" src="/interests.jpg" />
          </div>
          <div className="b">Creative Writing</div>
          <div>
            Passionate about writing, whether it's stories, comedy, or my blog.
          </div>
          <div className="b pt3">Music</div>
          <div>
            Currently learning guitar and have played trombone and piano.
          </div>
          <div className="b pt3">Video Editing</div>
          <div className="white-visited">
            Enjoy making comedic videos, one of my creations can be found{" "}
            <a href="https://www.youtube.com/watch?v=G8twOFFJqhM&t">here</a> or
            on my website.
          </div>
          <div></div>
        </div>
        <div className="pa3 pl3 mw65">
          <div className="resume-section-header experience-padding">
            EXPERIENCE
          </div>
          <div className="experience-header">
            <div className="b">Software Developer Co-op</div>
            <div>Jan. 2021 - Aug. 2021</div>
          </div>
          <div className="">Thrive CRM Software Inc.</div>
          <ul className="resume-list">
            <li>
              Developed the real estate agent CRM "Reach for Agents". Used{" "}
              <b>React</b> with <b>TypeScript</b> to implement dozens of
              features, including user permissions, entity archiving and list
              reordering.
            </li>
            <li>
              Integrated the <b>Google Calendar API</b> into the CRM's calendar
              component. Implemented React component libraries to design an
              independent version of Google Calendar.
            </li>
            <li>
              Programmed the backend with the <b>Firebase</b> platform. Lowered
              costs by writing efficient queries that minimized unnecessary
              reads and writes to the database.
            </li>
            <li>
              Worked in a four person startup team, responsible for all
              technical aspects of the product and often self-directed progress.
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
              App Designer, tracking over 100 issues during the work term.
            </li>
            <li>
              Tested and approved developer pull requests through{" "}
              <b>Azure DevOps</b>, cohesively reporting any problems and
              ensuring software quality.
            </li>
            <li>
              Wrote <b>functional automated testing</b> scripts using
              TypeScript, helping the team complete two regression cycles and
              minimize issues before pushing to production.
            </li>
            <li>
              Worked in an agile team, learning about the methodology and its
              importance in a technological workplace.
            </li>
          </ul>
          <div className="resume-section-header special-spacer">PROJECTS</div>
          <div className="b pb1">Gatsby Web Development</div>
          <div className="black-visited">
            Designed a personal portfolio and blog website using <b>React</b>,{" "}
            <b>TypeScript</b> and <b>Gatsby</b>. It is mobile responsive and
            hosted by GitHub Pages at{" "}
            <a href="https://connorbuchko.com/">connorbuchko.com</a>.
          </div>
          <div className="b pt3 pb1">Unity Game Development</div>
          <div className="black-visited">
            Continuously experimenting with the Unity game engine using{" "}
            <b>C#</b>. Recently published my first finished game to{" "}
            <a href="https://cbuchko.itch.io/drillgame">itch.io</a>.
          </div>
          <div className="pt4 reference-margin">REFERENCES</div>
          <div className="b">Available on Request</div>
        </div>
      </div>
    </div>
  );
}
