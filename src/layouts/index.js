import React from "react";
import Link from "gatsby-link";
import "../styles/styles.css";
import "@fontsource/roboto-mono"; // Defaults to weight 400 with all styles included.
import Header from "../components/Header";

export const TemplateWrapper = ({
  children,
  headerChildren,
  footerChildren,
}) => (
  <body className="roboto relative">
    <Header headerChildren={headerChildren} />
    <div class="wrapper min-h-100 mb6">{children}</div>
    {footerChildren}
    <ul class="widgets mb0">
      <li>
        <a href="https://github.com/cbuchko" target="_blank" rel="noreferrer">
          <img src="/github.png" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/connor-buchko-17932116a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linkedin.png" />
        </a>
      </li>
    </ul>
    <button
      id="scroll-btn"
      className="sidebar-btns"
      title="Scroll to top"
    ></button>
  </body>
);
