import React, { Component } from "react";
import { graphql } from "gatsby";
// import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import Layout from "../layouts";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import { rhythm } from "../utils/typography";
// import styled from "@emotion/styled";

import StudentList from "../components/studentList";
import CategoryList from "../components/categoryList";

// import {
//   GridBoxContainer,
//   GridSectionHeader,
//   GridBox,
//   GridHeader
// } from "../utils/styles";

const StudentNames = css`

`;

class Students extends Component {  
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   this.setState({
  //     studentGrid: false,
  //   })
  // }

  // componentWillUnmount() {

  // }

  

  render() {
    const posts = this.props.data.allWordpressPost;
    const categories = this.props.data.allWordpressCategory;

    return (
      <Layout>
         <div>
          <CategoryList categories={categories} />
        </div>
        <div css={StudentNames}>
          <StudentList students={posts} />
        </div>
      </Layout>
    );
  }
}

export default Students;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPost(
      filter: { wordpress_id: { ne: 17035 } }
      sort: { fields: [title] }
    ) {
      edges {
        node {
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
