import React from "react";
import { Link } from "gatsby";
// import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import { css } from "@emotion/core";
import {
  GridBoxContainer,
  PaddedMobile
  // PaddedMobile
} from "../utils/styles";

import { rhythm } from "../utils/typography";

const GridBoxCategories = css`
  overflow: hidden;
  margin: 0 auto;
  max-width: 960px;
  /* padding: 0; */
  padding: 0 ${rhythm(1)};

  @media (min-width: 40em) {
    padding: 0 ${rhythm(1 / 2)};
  }
  border: 0px solid #ececec;
`;

const StudentList = ({ students }) => {
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
      {students.edges.map(({ node }) => (
        <Box
          width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]}
          px={[1, 1, 2]}
          key={`box-${node.slug}`}
        >
          <div key={node.slug} css={GridBoxCategories}>
            <Link to={`/${node.slug}`} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
          </div>
        </Box>
      ))}
    </Flex>
  );
};

export default StudentList;
