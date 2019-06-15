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
import Video from "../components/video";
import Layout from "../layouts";
import { rhythm } from "../utils/typography";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import styled from "@emotion/styled";
import {
  // MainWrapper,
  // FullWidth,
  // Padded,
  PaddedMobile,
  PostMain,
  PostTitleItems,
  MarginTopPost
  // BoxShadow,
  // SubtleAccent
} from "../utils/styles";

export const ProjectStyle = css`
  padding-top: ${rhythm(2)};
`;


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;
    // const students = this.props.data.allWordpressWpStudent;
    // console.log(post);
    return (
      <Layout>
        <Helmet
          title={`GMD | ${post.acf.display_name}`}
          meta={[{ name: "description", content: post.content }]}
        />

        <PostMain css={MarginTopPost}>
          <PostTitleItems css={PaddedMobile}>
            {post.acf.display_name && (
              <Box width={1} px={[0, 1, 2]} key={`post-name`}>
                <div css={PaddedMobile}>
                  <h1
                    dangerouslySetInnerHTML={{ __html: post.acf.display_name }}
                  />
                </div>
              </Box>
            )}
            {post.acf.email && (
              <Box width={1} px={[0, 1, 2]} key={`post-email`}>
                <div dangerouslySetInnerHTML={{ __html: post.acf.email }} />
              </Box>
            )}
            {post.acf.website_url && (
              <Box width={1} px={[0, 1, 2]} key={`post-website`}>
                <a
                  href={post.acf.website_url.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.acf.website_url.title}
                </a>
              </Box>
            )}
            {post.acf.biography && (
              <Box
                width={[1, 1, 1 / 2]}
                px={[0, 1, 2]}
                py={4}
                key={`post-biography`}
              >
                <div dangerouslySetInnerHTML={{ __html: post.acf.biography }} />
              </Box>
            )}
          </PostTitleItems>
        </PostMain>

        <Flex
          mx={[0, -1, -2]}
          flexWrap="wrap"
          css={css`
              /* margin: ${rhythm(2)} 0; */
            `}
        >
          {/* Projects below */}
        </Flex>
        {post.acf &&
          post.acf.projects &&
          post.acf.projects.map((project, i) => {
            return (
              <Flex
                flexWrap="wrap"
                flexDirection="row"
                py={2}
                css={ProjectStyle}
                key={i}
              >
                <Box width={1} px={[2, 2]} key={`title-${i}`}>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: project.project_title
                    }}
                  />
                </Box>
                <Box width={1} px={[2, 2]} key={`description-${i}`}>
                  <Box width={[1, 1, 1 / 2]} key={`description-inner-${i}`}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: project.project_description
                      }}
                    />
                  </Box>
                </Box>
                <Box width={1} px={[0, 2]} key={`post-images-${i}`}>
                  {project.images_video &&
                    project.images_video.map((media, i) => {
                      if (media.vimeo_link || media.youtube_link) {
                        let video;
                        if (media.vimeo_link) {
                          video = media.vimeo_link;
                        } else {
                          video = media.youtube_link;
                        }
                        return (
                          <Video
                            videoSrcURL={video}
                            videoTitle={project.project_title}
                            key={`video-${i}`}
                          />
                        );
                      } else if (media.project_image) {
                        const img =
                          media.project_image.localFile.childImageSharp.fluid;
                        return (
                          <div key={`${i} image-gallery`}>
                            <Img
                              css={{ marginBottom: rhythm(1) }}
                              key={img.src}
                              fluid={img}
                            />
                          </div>
                        );
                      } else {
                        return false;
                      }
                    })}
                </Box>
              </Flex>

              // <Box width={[1, 4 / 12]} px={[0, 2]} key={`post-content1`}>
              //   <div
              //     css={Padded}
              //     dangerouslySetInnerHTML={{ __html: post.content }}
              //   />
              // </Box>
            );
          })}
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
      acf {
        biography
        display_name
        email
        website_url {
          target
          title
          url
        }
        featured_image {
          source_url
          localFile {
            childImageSharp {
              fluid(maxWidth: 680, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        projects {
          project_title
          project_description
          images_video {
            vimeo_link
            youtube_link
            project_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 1600
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
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
