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


const StudentList = ({ students }) => {
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
            <Box
              width={1}
              px={[1, 1, 2]}
              key={`box-recent-projects-students`}
            />

            {students.edges.map(({ node }) => (
              <Box
                width={[1 / 2, 1 / 3, 1 / 5]}
                px={[1, 1, 2]}
                key={`box-${node.slug}`}
                css={[GridBoxContainer, PaddedMobile]}
              >
                <div key={node.slug}>
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
