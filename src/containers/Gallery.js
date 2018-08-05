import React from "react";
import { withRouteData, Link } from "react-static";
import logo from "../assets/logo.png";
import Helmet from "react-helmet";
import Gallery from "../components/Gallery";
import styled from "styled-components";
//

const SmallLogo = styled.img`
  width: 100px;
  margin: 20px 0;
`;

export default withRouteData(({ images }) => (
  <div>
    <Helmet title={"Photos"} />
    <div className="section">
      <div className="content">
        <Link to="/">
          <SmallLogo style={{ width: 100 }} src={logo} />
        </Link>
      </div>
    </div>
    <div className="section">
      <div className="content post">
        <h1>Galerie</h1>
        <p>
          Les images de ce voyage, celles des articles et celles qu'on aime
          bien.
        </p>
      </div>
    </div>
    <div className="section">
      <div className="content">
        <Gallery
          photos={images.reverse().map(img => ({ ...img, src: img.url }))}
          direction={"column"}
        />
      </div>
    </div>
  </div>
));
