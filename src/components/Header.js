import React from "react";
import Link from "gatsby-link";
import "../styles/styles.css";
import "@fontsource/roboto-mono"; // Defaults to weight 400 with all styles included.

export default function Header({ headerChildren }) {
  return (
    <div>
      <div class="bg-lightest-blue pa4 header flex items-center overflow-hidden">
        <Link className="link f1 mr4" title="Home" to="/">
          {"Connor Buchko"}
        </Link>
        <ul class="ma0 pa0 pt1 f4">
          <li class="ph3">
            <Link className="link" title="Home" to="/">
              {"HOME"}
            </Link>
          </li>
          <li class="ph3">
            <Link className="link" title="Blog" to="/blog">
              {"BLOG"}
            </Link>
          </li>
        </ul>
      </div>
      {headerChildren}
    </div>
  );
}
