import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
// import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import { css } from "@emotion/core";
import {
  GridBoxContainer,
  GridBox,
  GridHeader
} from "../utils/styles";

import { rhythm } from "../utils/typography";

const Categories = css`
  font: 14px "nb_internationalbold";
`;

const StudentGrid = ({ students }) => {
  console.log(students);
  return (
    <Flex
      // mx={[0, -1, -2]}
      flexWrap="wrap"
      css={css`
        margin-top: ${rhythm(2)};
        position: relative;
        z-index: 2;
      `}
      mx={[-1, -1, -2]}
    >
      <Box width={1} px={[1, 1, 2]} key={`box-recent-projects`} />

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
                <Img
                  key={
                    node.acf.featured_image.localFile.childImageSharp.fluid.src
                  }
                  fluid={
                    node.acf.featured_image.localFile.childImageSharp.fluid
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
                if (category.name !== "Uncategorised") {
                  return (
                    <span css={Categories} key={`category-${i}`}>
                      {category.name}
                      {comma}
                    </span>
                  );
                } else {
                  return false
                }
              })}
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
