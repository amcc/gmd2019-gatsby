// wordpress setup
// https://www.dajocarter.com/posts/wordpress-authentication-with-gatsby/

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Graphic Media Design {Salon XIX}`,
    subtitle: `Graphic Media Design {Salon XIX}`
  },
  plugins: [
    // https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/pages/
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MA User Experience Design`,
        short_name: `GMD`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png` //
      }
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en"
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        // The protocol. This can be http or https.

        // baseUrl: `gmdlccdummy.test`,
        // protocol: `http`,
        
        baseUrl: `http://admin.gmdlcc.com`,
        protocol: `http`,
        
        // auth: {
        //   htaccess_user: process.env.WP_USERNAME,
        //   htaccess_pass: process.env.WP_PASSWORD,
        //   htaccess_sendImmediately: false
        // },

        includedRoutes: [
          "**/pages",
          "**/posts",
          // "**/student",
          // "**/competency",
          "**/categories",
          "**/tags",
          "**/media",
          // "**/taxonomies",
        ],
        // Blacklisted routes using glob patterns
        // excludedRoutes: ["**/users"],

        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com
        useACF: true,
        // verboseOutput: true,
        
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true
      }
    },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "https://gmdlcc2019.netlify.com",
    //     sitemap: "https://gmdlcc2019.netlify.com/sitemap.xml",
    //     env: {
    //       development: {
    //         policy: [{ userAgent: "*", disallow: ["/"] }]
    //       },
    //       production: {
    //         policy: [{ userAgent: "*", disallow: "/" }]
    //       }
    //     }
    //   }
    // }
  ]
};
