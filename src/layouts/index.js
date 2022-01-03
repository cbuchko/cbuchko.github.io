import React from "react";
import "../styles/styles.css";
import "@fontsource/roboto-mono"; // Defaults to weight 400 with all styles included.
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { useWindowSize } from "../components/useWindowSize";

export const TemplateWrapper = ({
  children,
  headerChildren,
  footerChildren,
}) => {
  const mobile = useWindowSize() < 900;
  return (
    <body className="roboto relative">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Connor Buchko</title>
        <link rel="shortcut icon" type="image/jpg" href="/cartoon.png" />
      </Helmet>
      <Header headerChildren={headerChildren} />
      <div class="wrapper min-h-100 mb6">{children}</div>
      {footerChildren}
      {(!footerChildren || mobile) && (
        <ul class="widgets footer mb0">
          <li>
            <a
              href="https://github.com/cbuchko"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/github.png" alt="github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/connor-buchko-17932116a/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      )}
      <button
        id="scroll-btn"
        className="sidebar-btns"
        title="Scroll to top"
      ></button>
    </body>
  );
};
