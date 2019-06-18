import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import { css } from "@emotion/core";
import { GridBoxContainer, GridBox, GridHeader } from "../utils/styles";

import { rhythm } from "../utils/typography";
import StudentGridItem from "./studentGridItem";

const Categories = css`
  font: 14px "nb_internationalbold";
`;

const ImgBorder = css`
  border: 1px solid #ececec;
`;

const StudentGrid = ({ students }) => {
  return (
    <Flex
      // mx={[0, -1, -2]}
      flexWrap="wrap"
      css={css`
        margin-top: ${rhythm(2)};
        position: relative;
        z-index: 2;
        width: 100%;
      `}
      mx={[1, -1, -2]}
    >
      {students.edges.map(({ node }) => (
        <Box
          width={[1 / 3, 1 / 3, 1 / 4, 1 / 5]}
          px={[1, 1, 2]}
          key={`box-${node.slug}`}
          css={GridBoxContainer}
        >
          <div css={GridBox} key={node.slug}>
            <StudentGridItem node={node} />
          </div>
        </Box>
      ))}
    </Flex>
  );
};

export default StudentGrid;

export const query = graphql`
  fragment StudentGrid on wordpress__POST {
    acf {
      featured_image {
        source_url
        localFile {
          childImageSharp {
            fluid(
              maxWidth: 250
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
    }
  }
`;