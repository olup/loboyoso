import React from "react";
import { withRouteData, Link } from "react-static";
import logo from "../assets/logo.svg";
import Helmet from "react-helmet";
import moment from "moment";
import Md from "react-markdown";
import styled from "react-emotion";
//

const SmallLogo = styled("img")`
  width: 100px;
  margin: 20px 0;
`;

export default withRouteData(({ post }) => (
  <div>
    <Helmet title={post.title} />
    <div className="section">
      <div className="content">
        <Link to="/">
          <SmallLogo style={{ width: 100 }} src={logo} />
        </Link>
      </div>
    </div>
    <div className="section">
      <div className="content post">
        <h1 style={{ marginTop: 0 }}>{post.title}</h1>
        <div className="date">
          {moment(post.date).format("dddd DD MMMM YYYY")}
        </div>
        <Md source={post.contents} />
      </div>
    </div>
  </div>
));
