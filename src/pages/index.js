import React, { Component } from "react";
import { graphql } from "gatsby";
// import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import Layout from "../layouts";
//import PostIcons from "../components/post-icons";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import HeroImage from "../components/heroimage";

import styled from "@emotion/styled";
import HomeBanner from "../components/homeBanner";
import StudentGrid from "../components/studentGrid";
import StudentList from "../components/studentList";
import CategoryList from "../components/categoryList";
import HomeVideo from "../components/homeVideo";
// import {
//   GridBoxContainer,
//   GridSectionHeader,
//   GridBox,
//   GridHeader,
//   PaddedMobile
//   // PaddedMobile
// } from "../utils/styles";

// import smoothscroll from 'smoothscroll-polyfill';

const HeroContainer = styled.div`
  position: relative;
  height: 80vh;
`;
const HomeBannerStyle = css`
  /* margin-top: -80px; */
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: 0;
`;
const HomeVideoStyle = css`
  display: none;
  @media (min-width: 40em) {
    display: block;
  }
  z-index: 9;
`;

const StudentNames = css`
  display: none;
  @media (min-width: 40em) {
    display: none;
  }
`;
const ProjectBoxes = css`
  display: flex;
  @media (min-width: 40em) {
    display: flex;
  }
`;

class Home extends Component {
  render() {
    const posts = this.props.data.allWordpressPost;
    const categories = this.props.data.allWordpressCategory;
    return (
      <Layout>
        <HeroContainer>
          {/* <HeroThree /> */}
          <div css={HomeVideoStyle}>
            <HomeVideo video="gmd-salon-xix.mp4" />
          </div>
          <div css={HomeBannerStyle}>
            <HomeBanner />
          </div>
        </HeroContainer>

        <div>
          <CategoryList categories={categories} />
        </div>

        <div css={ProjectBoxes}>
          <StudentGrid students={posts} />
        </div>
        <div css={StudentNames}>
          <StudentList students={posts} />
        </div>
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
      sort: { fields: [title] }
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
    allWordpressCategory(filter: { name: { ne: "Uncategorised" } }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;
