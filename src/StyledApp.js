import styled from "styled-components";

export default styled.div`
  h1,
  h2,
  h3,
  h4 {
    font-family: "Open Sans", sans-serif;
    font-weight: 900;
  }
  a {
    text-decoration: none;
    box-shadow: none;
    color: inherit;
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
    padding: 0 1.5rem;
  }

  .main-logo {
    margin: 50px auto;
    margin-bottom: 100px;
    display: block;
  }

  .post {
    line-height: 1.8;
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
      line-height: 2.5;
    }
  }
`;
