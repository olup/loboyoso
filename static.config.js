import { reloadRoutes } from "react-static/node";
import jdown from "jdown";
import markdownIt from "markdown-it";
import cheerio from "cheerio";
import chokidar from "chokidar";
import rss from "rss";
import fs from "fs";

const summaryLength = 300;

const markdown = new markdownIt();

chokidar.watch("content").on("all", () => reloadRoutes());

let postsList = [];

export default {
  plugins: ["react-static-plugin-styled-components"],
  // siteRoot: "https://loboyoso.ga",
  getSiteData: () => ({
    title: "Lobo Y Oso"
  }),
  getRoutes: async () => {
    const { posts } = await jdown("content", { parseMd: false });

    postsList = posts.map(post => {
      const html = markdown.render(post.contents);
      const $ = cheerio.load(html);
      const summary = $("*")
        .text()
        .slice(0, summaryLength);

      return { ...post, html, summary };
    });

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
        description: post.contents,
        date: post.date
      });
    }
    fs.writeFileSync("dist/rss.xml", feed.xml(), "utf8");
  }
};
