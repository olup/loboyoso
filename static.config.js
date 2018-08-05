import { reloadRoutes } from "react-static/node";
import React, { Component } from "react";
import jdown from "jdown";
import markdownIt from "markdown-it";
import implicitFigures from "markdown-it-implicit-figures";
import cheerio from "cheerio";
import chokidar from "chokidar";
import rss from "rss";
import fs from "fs";
import { ServerStyleSheet } from "styled-components";
import cloudinary from "cloudinary";

require("dotenv").config();

cloudinary.config({
  cloud_name: "ddr0gowa5",
  api_key: "149193598748766",
  api_secret: process.env.cloudinary_secret
});

const getAllImages = () =>
  new Promise((res, rej) => {
    cloudinary.v2.api.resources(
      { type: "upload", prefix: "blog/" },
      (error, result) => {
        if (error) rej(error);
        else res(result.resources);
      }
    );
  });

const summaryLength = 300;

const markdown = new markdownIt();
markdown.use(implicitFigures, {
  figcaption: true,
  link: false
});

if (process.env.NODE_ENV !== "production")
  chokidar.watch("content").on("all", () => reloadRoutes());

let postsList = [];

export default {
  // siteRoot: "https://loboyoso.ga",
  getSiteData: () => ({
    title: "Lobo Y Oso"
  }),
  getRoutes: async () => {
    const { posts = [] } = await jdown("content", { parseMd: false });

    postsList = posts.map(post => {
      const html = markdown.render(post.contents);
      const $ = cheerio.load(html);
      const summary = $("*")
        .text()
        .slice(0, summaryLength);

      return { ...post, html, summary };
    });

    const images = await getAllImages();

    return [
      {
        path: "/",
        component: "src/containers/Blog",
        getData: () => ({
          posts: postsList
        }),
        children: postsList.map(post => ({
          path: `/post/${post.slug}`,
          component: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      },
      {
        path: "/photos",
        component: "src/containers/Gallery",
        getData: () => ({
          images
        })
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  },
  onBuild: async obj => {
    fs.copyFileSync("dist/index.html", "dist/200.html");
    const feed = new rss({ title: "Lobo Y Oso" });
    for (const post of postsList) {
      feed.item({
        title: post.title,
        description: post.summary,
        date: post.date
      });
    }
    fs.writeFileSync("dist/rss.xml", feed.xml(), "utf8");
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
