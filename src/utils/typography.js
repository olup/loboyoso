import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";

Wordpress2016.overrideThemeStyles = () => ({
  blockquote: {
    margin: "30px 0"
  }
});

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
