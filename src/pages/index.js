import React, { Component } from "react";
import { Link, graphql } from "gatsby";
// import { FaRegClock } from "react-icons/fa";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import Img from "gatsby-image";
import Layout from "../layouts";
//import PostIcons from "../components/post-icons";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import HeroImage from "../components/heroimage";
import { FaChevronDown } from "react-icons/fa";
import { rhythm } from "../utils/typography";
import styled from "@emotion/styled";
import HomeBanner from "../components/homeBanner";
import {
  GridBoxContainer,
  GridSectionHeader,
  GridBox,
  GridHeader
  // PaddedMobile
} from "../utils/styles";

// import smoothscroll from 'smoothscroll-polyfill';

const HeroContainer = styled.div`
  position: relative;
`;

const Categories = css`
  font: 14px "nb_internationalbold";
`;

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //    field: value
    // }
    //creates a reference for your element to use
    this.myDivToFocus = React.createRef();
  }

  // load the smoothscroll here as it requires window:
  // https://github.com/webpack/react-starter/issues/37
  componentDidMount() {
    const smoothscroll = require("smoothscroll-polyfill");
    // kick off the polyfill!
    // this hopefully fixes ios smooth
    smoothscroll.polyfill();
  }

  handleOnClick = event => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  render() {
    const data = this.props.data;
    console.table(data);
    return (
      <Layout>
        <HeroContainer>
          {/* <HeroThree /> */}
          <HomeBanner />
        </HeroContainer>

        <Flex
          // mx={[0, -1, -2]}
          flexWrap="wrap"
          css={css`
            margin-top: ${rhythm(2)};
            position: relative;
            z-index: 2;
          `}
          ref={this.myDivToFocus}
        >
          <Box width={1} px={[1, 1, 2]} key={`box-recent-projects`} />

          {data.allWordpressPost.edges.map(({ node }) => (
            <Box
              width={[1 / 3, 1 / 3, 1 / 5]}
              px={[1, 1, 2]}
              key={`box-${node.slug}`}
              css={GridBoxContainer}
            >
              <div css={GridBox} key={node.slug}>
                <Link to={`/${node.slug}`} css={{ textDecoration: `none` }}>
                  {node.acf.featured_image &&
                    node.acf.featured_image.localFile && (
                      <Img
                        key={
                          node.acf.featured_image.localFile.childImageSharp
                            .fluid.src
                        }
                        fluid={
                          node.acf.featured_image.localFile.childImageSharp
                            .fluid
                        }
                      />
                    )}
                  <h3 css={GridHeader}>{node.title}</h3>
                  {node.categories.map((category, i) => {
                    let comma;
                    if (i < node.categories.length - 1) {
                      comma = `, `;
                    } else {
                      comma = ``;
                    }
                    if (category.name != "Uncategorised") {
                      return (
                        <span css={Categories} key={`category-${i}`}>
                          {category.name}
                          {comma}
                        </span>
                      );
                    }
                  })}
                </Link>

                {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                {/* <PostIcons node={node} /> */}
              </div>
            </Box>
          ))}
        </Flex>
      </Layout>
    );
  }
}

export default Home;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPost(
      filter: { wordpress_id: { ne: 17035 } }
      sort: { fields: [date] }
    ) {
      edges {
        node {
          wordpress_id
          title
          excerpt
          slug
          categories {
            name
            slug
          }
          acf {
            featured_image {
              source_url
              localFile {
                childImageSharp {

                  fluid(
                    maxWidth: 680
                    quality: 90
                    traceSVG: { color: "#ff5001" }
                  ) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
