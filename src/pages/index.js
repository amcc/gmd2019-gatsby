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
import {
  GridBoxContainer,
  GridSectionHeader,
  GridBox,
  GridHeader
} from "../utils/styles";
// import smoothscroll from 'smoothscroll-polyfill';

const HeroContainer = styled.div`
  position: relative;
`;
const HeroStyles = css``;
const HeroTextOverlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
`;
const HeroTextOverlayInner = styled.div`
  height: 60%;
  width: 100%;
  color: white;
  a {
    color: white;
  }
  margin-top: 3vw;
  padding: ${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(1 / 2)};
  font-size: 90%;
  font-weight: 300;
  h1 {
    /* font-size: 160%; */
    color: white;
  }
  mix-blend-mode: difference;

  @media (min-width: 40em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
    font-size: 150%;
    h1 {
      font-size: 150%;
    }
    h3 {
      padding-left: 0;
    }
  }
  @media (min-width: 52em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
    h1 {
      font-size: 160%;
    }
    font-size: 150%;
  }
  @media (min-width: 64em) {
    padding: ${rhythm(1 / 2)} 30vw 0 0;
    font-size: 160%;
    h1 {
      font-size: 180%;
      font-weight: 300;
    }
  }
`;
const DownArrow = styled.div`
  /* height: 30%; */
  text-align: center;
  font-size: 270%;
  @media (min-width: 40em) {
    font-size: 400%;
  }
`;
const DownArrowButton = css`
  color: white;
  /* opacity: 0.8; */
  cursor: pointer;
  height: 100%;
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

    return (
      <Layout>
        

        <Flex
          // mx={[0, -1, -2]}
          flexWrap="wrap"
          css={css`
            margin-top: ${rhythm(2)};
          `}
        >
          <Box width={1} px={[1, 1, 2]} key={`box-recent-projects`}>
            <h2 ref={this.myDivToFocus} css={GridSectionHeader}>
             Portfolios
            </h2>
          </Box>

          {data.allWordpressPost.edges.map(({ node }) => (
            <Box
              width={[1 / 3, 1 / 3, 1 / 4]}
              px={[1, 1, 2]}
              key={`box-${node.slug}`}
              css={GridBoxContainer}
            >
              <div css={GridBox} key={node.slug}>
                <Link to={`/${node.slug}`} css={{ textDecoration: `none` }}>
                  {node.acf.featured_image && node.acf.featured_image.localFile && (
                    <Img
                      // css={{ marginBottom: rhythm(1 / 2) }}
                      key={
                        node.acf.featured_image.localFile.childImageSharp.fluid.src
                      }
                      fluid={
                        node.acf.featured_image.localFile.childImageSharp.fluid
                      }
                    />
                  )}
                  <h3 css={GridHeader}>{node.title}</h3>
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
    
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          acf {
            featured_image {
              source_url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 680) {
                    ...GatsbyImageSharpFluid
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
