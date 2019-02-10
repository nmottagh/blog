module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "naz", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Naz Mottaghian", // Site title.
  siteTitleAlt: "Nazanin Naz Mottaghian - Personal Site", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "http://nazmottaghian.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "I am a curious, passionate, and team-oriented engineer motivated by the impact of using technology to innovate, solve problems, and invent new possibilities.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Naz Mottaghian", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-117474379-1", // GA tracking ID.
  disqusShortname: "nazmottaghian-1", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://twitter.com/nazmottaghian",
    "https://www.linkedin.com/in/nazmottaghian/",
    "https://instagram.com/nazzios",
    "mailto:=nmottagh[at]hotmail.com",
    "https://github.com/nmottagh"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/nazmottaghian",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/nmottagh",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    },
    {
      label: "Instagram",
      url: "https://instagram.com/nazzios",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:nmottagh[at]hotmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    },
    {
      label: "GitHub",
      url: "https://github.com/nmottagh",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Naz Mottaghian" // Label used before the year
    //year: "2018", // optional, set specific copyright year or range of years, defaults to current year
    //url: "nazmottaghian.com/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};