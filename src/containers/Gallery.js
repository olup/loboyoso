import React from "react";
import { withRouteData, Link } from "react-static";
import logo from "../assets/logo.png";
import Helmet from "react-helmet";
import Gallery from "../components/Gallery";
import styled from "styled-components";
import BigHeader from "../components/BigHeader";

const SmallLogo = styled.img`
  width: 100px;
  margin: 20px 0;
`;

export default withRouteData(({ images }) => (
  <div>
    <Helmet title={"Photos"} />
    <BigHeader tab="gallery" />
    <div className="section">
      <div className="content">
        <Gallery
          photos={images.map(img => ({ ...img, src: img.url }))}
          direction={"column"}
        />
      </div>
    </div>
  </div>
));
