import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    font-family: "Merriweather", sans-serif;
  }
  a {
    text-decoration: none;
    box-shadow: none;
    color: inherit;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Merriweather", sans-serif;
    font-weight: 900;
  }


  .section {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
  }

  .content {
    width: 100%;
    max-width: 700px;
    padding: 0 0.5rem;
  }

  .post {
    line-height: 1.8;
    font-family: "Merriweather";
    .date {
      font-size: 1rem;
      opacity: 0.5;
      margin-bottom: 10px;
      text-transform: capitalize;
    }
    h1,
    h2 {
      margin-top: 0;
      margin-bottom: 0px;
    }
    p {
      margin: 2rem 0;
      line-height: 2.2;
      img {
        display: block;
        width: 100%;
      }
    }

      figure {
    margin: 0;
    margin-right: -1rem;
    margin-left: -1rem;
    img {
      width: 100%;
    }
    figcaption {
      opacity: 0.5;
      font-style: italic;
      text-align: center;
      font-size: 11px;
    }
  }

  }
`;

export default null;
