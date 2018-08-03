import React, { Fragment } from "react";
import { withRouteData, Link } from "react-static";
import Helmet from "react-helmet";
import logo from "../assets/logo.svg";
import Newsletter from "../components/Newsletter";
import moment from "moment";

moment.locale("fr");

export default withRouteData(({ posts }) => (
  <div>
    <Helmet title={"Lobo Y Oso"} />
    <div className="section">
      <div className="content">
        <Link to="/">
          <img className="main-logo" src={logo} />
        </Link>
      </div>
    </div>
    {posts.map((post, index) => {
      return (
        <Fragment key={post.slug}>
          <div className="section">
            <div className="content">
              <div className="post">
                <Link
                  style={{ boxShadow: "none", color: "#000" }}
                  to={"/post/" + post.slug}
                >
                  <h2>{post.title}</h2>
                  <div className="date">
                    {moment(post.date).format("dddd DD MMMM YYYY")}
                  </div>
                  <div className="text">{post.summary}...</div>
                </Link>
              </div>
            </div>
          </div>
          {index === 0 && (
            <div className="section">
              <div className="content">
                <Newsletter />
              </div>
            </div>
          )}
        </Fragment>
      );
    })}
  </div>
));
