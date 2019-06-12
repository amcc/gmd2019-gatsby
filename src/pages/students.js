import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import Layout from "../layouts";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js

import { rhythm } from "../utils/typography";
// import styled from "@emotion/styled";
import {
  GridBoxContainer,
  GridSectionHeader,
  GridBox,
  GridHeader
} from "../utils/styles";
// import smoothscroll from 'smoothscroll-polyfill';


class Students extends Component {
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
             Students
            </h2>
          </Box>

          {data.allWordpressPost.edges.map(({ node }) => (
            <Box
              width={[1 / 3, 1 / 4, 1 / 6]}
              px={[1, 1, 2]}
              key={`box-${node.slug}`}
              css={GridBoxContainer}
            >
              <div css={GridBox} key={node.slug}>
                <Link to={`/${node.slug}`} css={{ textDecoration: `none` }}>
                  {/* {node.acf.featured_image && node.acf.featured_image.localFile && (
                    <Img
                      // css={{ marginBottom: rhythm(1 / 2) }}
                      key={
                        node.acf.featured_image.localFile.childImageSharp.fluid.src
                      }
                      fluid={
                        node.acf.featured_image.localFile.childImageSharp.fluid
                      }
                    />
                  )} */}
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

export default Students;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    
    allWordpressPost(filter: {wordpress_id: {ne: 17035}}, sort: { fields: [date] }) {
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
