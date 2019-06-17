import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
// import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import { css } from "@emotion/core";
import {
  GridBoxContainer,
  GridBox,
  GridHeader,
  SubtleAccent
} from "../utils/styles";

import { rhythm } from "../utils/typography";

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
      mx={[-1, -1, -2]}
    >
      {/* <Box width={1} px={[1, 1, 2]} key={`box-recent-projects`} /> */}

      {students.edges.map(({ node }) => (
        <Box
          width={[1, 1 / 3, 1 / 5]}
          px={[1, 1, 2]}
          key={`box-${node.slug}`}
          css={GridBoxContainer}
        >
          <div css={GridBox} key={node.slug}>
            <Link to={`/${node.slug}`} css={{ textDecoration: `none` }}>
              {node.acf.featured_image && node.acf.featured_image.localFile && (
                <Img css={ImgBorder}
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
  );
};

export default StudentGrid;
