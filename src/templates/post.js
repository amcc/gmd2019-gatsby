import React, { Component } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
// import PostCompetencies from "../components/post-competencies";
// import PostPartners from "../components/post-partners";
// import PostStudents from "../components/post-students";
// import PostClock from "../components/post-clock";
// import HeroImage from "../components/heroimage";
import Img from "gatsby-image";
import Layout from "../layouts";
import { rhythm } from "../utils/typography";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import styled from "@emotion/styled";
import {
  MainWrapper,
  FullWidth,
  Padded,
  PaddedMobile,
  PostMain,
  PostTitleItems,
  MarginTopPost,
  BoxShadow,
  SubtleAccent
} from "../utils/styles";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;
    // const students = this.props.data.allWordpressWpStudent;
    // console.log(post);
    return (
      <Layout>
        <Helmet
          title={`MA:UX | ${post.title}`}
          meta={[{ name: "description", content: post.content }]}
        />
        <PostMain css={MarginTopPost}>
          <Flex
            mx={[0, -1, -2]}
            flexWrap="wrap"
            css={css`
              /* margin: ${rhythm(2)} 0; */
            `}
          >
            <Box width={[1, 1, 6 / 12]} px={[0, 1, 2]} key={`post-image`}>
              <div css={PaddedMobile}>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                {/* <PostClock node={post} css={{ marginBottom: rhythm(1 / 2) }} /> */}
              </div>
            </Box>
            <Box width={[1, 1, 6 / 12]} px={[0, 1, 2]} key={`post-info`}>
              <PostTitleItems css={PaddedMobile}>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </PostTitleItems>
            </Box>
          </Flex>
          <Flex
            mx={[0, -1, -2]}
            flexWrap="wrap"
            css={css`
              /* margin: ${rhythm(2)} 0; */
            `}
          >
            <Box width={[1]} px={[0]} key={`post-image`}>
              {/* {post.featured_media && (
                <Img
                  // css={{ marginBottom: rhythm(1) }}
                  key={post.featured_media.localFile.childImageSharp.fluid.src}
                  fluid={post.featured_media.localFile.childImageSharp.fluid}
                />
              )} */}
            </Box>
          </Flex>

          <Flex flexWrap="wrap" flexDirection="row">
            <Box width={[1, 8 / 12]} px={[0, 2]} key={`post-images`}>
              {/* {post.acf &&
                post.acf.images &&
                post.acf.images.map((picture, i) => {
                  const img = picture.image.localFile.childImageSharp.fluid;
                  return (
                    <div key={`${i} image-gallery`}>
                      <Img
                        css={{ marginBottom: rhythm(1) }}
                        key={img.src}
                        fluid={img}
                      />
                    </div>
                  );
                })} */}
            </Box>
            <Box width={[1, 4 / 12]} px={[0, 2]} key={`post-content1`}>
              <div
                css={Padded}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Box>
          </Flex>
        </PostMain>
      </Layout>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
