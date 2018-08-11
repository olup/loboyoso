import React, { Fragment } from "react";
import { withRouteData, Link } from "react-static";
import Helmet from "react-helmet";
import Newsletter from "../components/Newsletter";
import moment from "moment";
import BigHeader from "../components/BigHeader";

moment.locale("fr");

export default withRouteData(({ posts }) => (
  <div>
    <Helmet title={"Lobo Y Oso"} />
    <BigHeader tab="blog" />
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

    {!posts.length && (
      <div className="section">
        <div className="content">
          <Newsletter />
        </div>
      </div>
    )}
  </div>
));
