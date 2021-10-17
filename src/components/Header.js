import React from "react";
import Link from "gatsby-link";
import "../styles/styles.css";
import "@fontsource/roboto-mono"; // Defaults to weight 400 with all styles included.

export default function Header({ headerChildren }) {
  return (
    <div>
      <div class="bg-lightest-blue header flex items-center overflow-hidden">
        <Link className="header-title f3 mr3" title="home" to="/">
          {"Connor Buchko"}
        </Link>
        <ul class="ma0 pa0 f4">
          <li class="ph4">
            <Link className="link" title="home" to="/">
              {"Home"}
            </Link>
          </li>
          <li class="ph3">
            <Link className="link" title="blog" to="/blog">
              {"Blog"}
            </Link>
          </li>
        </ul>
      </div>
      {headerChildren}
    </div>
  );
}
