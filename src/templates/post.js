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
  PaddedMobile,
  PostMain,
  PostTitleItems,
  MarginTopPost
} from "../utils/styles";

export const ProjectStyle = css`
  padding-top: ${rhythm(2)};
`;

const StudentBracket = css`
  p {
    display: none;
    color: white;
    @media (min-width: 40em) {
      display: flex;
      font-size: 8em;
    }
  }
`;

const StudentBracketParent = css`
  display: none;
  @media (min-width: 40em) {
    display: flex;
  }
`;

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;
    return (
      <Layout>
        <Helmet
          title={`GMD | ${post.acf.display_name}`}
          meta={[{ name: "description", content: post.content }]}
        >
          <style>{"body { background-color: #ececec; }"}</style>
        </Helmet>

        <PostMain css={MarginTopPost}>
          <PostTitleItems css={[PaddedMobile, StudentBracket]}>
            <Flex
              // mx={[0, -1, -2]}
              flexWrap="wrap"
              justifyContent="space-between"
              py={4}
            >
              <Box width={[1, 1, 1 / 2]} px={[0, 1, 2]} key={`post-biography`}>
                <Flex alignItems="center">
                  <Box width={1 / 16} px={[0, 1, 2]} css={StudentBracketParent}>
                    <p>&#123;</p>
                  </Box>
                  <Box width={1} px={[0, 1, 1]}>
                    <Flex flexWrap="wrap">
                      {post.acf.display_name && (
                        <Box width={1} px={[0, 0, 1]} key={`post-name`}>
                          <div>
                            <h1
                              dangerouslySetInnerHTML={{
                                __html: post.acf.display_name
                              }}
                            />
                          </div>
                        </Box>
                      )}
                      {post.acf.email && (
                        <Box width={1} px={[0, 1, 1]} key={`post-email`}>
                          <a href={`mailto:${post.acf.email}`}>
                            {post.acf.email}
                          </a>
                        </Box>
                      )}
                      {post.acf.website_url && (
                        <Box width={1} px={[0, 1, 1]} key={`post-website`}>
                          <a
                            href={post.acf.website_url.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.acf.website_url.title}
                          </a>
                        </Box>
                      )}
                    </Flex>
                  </Box>
                </Flex>
                <Box width={1} px={[0, 1, 1]} py={4} key={`post-biography`}>
                  {post.acf.biography && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.acf.biography
                      }}
                    />
                  )}
                </Box>
              </Box>
              <Box
                width={[1, 1, 1 / 2]}
                px={[0, 2, 4]}
                key={`featured-image`}
                py={[4, 4, 0]}
              >
                {post.acf.featured_image && (
                  <Img
                    css={{ marginBottom: rhythm(1) }}
                    key={"featured image"}
                    fluid={
                      post.acf.featured_image.localFile.childImageSharp.fluid
                    }
                  />
                )}
              </Box>
            </Flex>
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
                py={1}
                css={ProjectStyle}
                key={i}
              >
                <Box width={1} px={[0, 2]} key={`title-${i}`}>
                  <h2
                    css={PaddedMobile}
                    dangerouslySetInnerHTML={{
                      __html: project.project_title
                    }}
                  />
                </Box>
                <Box width={1} px={[0, 2]} key={`description-${i}`}>
                  <Box width={[1, 1, 1 / 2]} key={`description-inner-${i}`}>
                    <p
                      css={PaddedMobile}
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
                        if (media.project_image.localFile.childImageSharp) {
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
                        }
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
              fluid(
                maxWidth: 610
                quality: 75
                traceSVG: {
                  color: "#ff5001"
                  optTolerance: 0.2
                  turdSize: 0.01
                  turnPolicy: TURNPOLICY_MINORITY
                }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
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
                    maxWidth: 1400
                    quality: 85
                    traceSVG: {
                      color: "#ff5001"
                      optTolerance: 0.2
                      turdSize: 0.01
                      turnPolicy: TURNPOLICY_MINORITY
                    }
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

// save this for later:

// traceSVG: {
//   color: "#ff5001"
//   optTolerance: 0.2
//   turdSize: 0.01
//   turnPolicy: TURNPOLICY_MINORITY
