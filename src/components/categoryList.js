import React from "react";
import { Link } from "gatsby";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import { css } from "@emotion/core";
import {
  GridBoxContainer,
  PaddedMobile,
  SubtleAccent,
  FullWidth,
  MainWrapper,
  MainWrapperLite
} from "../utils/styles";

import { rhythm } from "../utils/typography";

const CategoryListStyle = css`
  margin-top: ${rhythm(2)};
  position: relative;
  z-index: 2;
  background: #ececec;

  padding: ${rhythm(1)} 0 0;
  @media (min-width: 40em) {
    padding: ${rhythm(1)};
  }
  .active {
    a {
      h3 {
        color: ${SubtleAccent};
      }

      h3::after {
        content: " {";
      }
    }
  }
`;
const CategoryItem = css`
  text-decoration: none;
`;
const CategoryBox = css`
  /* padding-left: ${rhythm(1 / 2)}; */
`;
const GridBoxCategories = css`
  overflow: hidden;
  margin: 0 auto;
  max-width: 960px;
  padding: 0;
  @media (min-width: 40em) {
    padding: 0 ${rhythm(1 / 2)};
  }
  border: 1px solid #ececec;
`;

const CategoryList = ({ categories, catId }) => {
  let currentCategory;
  if (!catId) {
    currentCategory = "active";
  }
  return (
    <FullWidth css={[CategoryListStyle]}>
      <MainWrapperLite>
        <Flex
          // mx={[0, -1, -2]}
          flexWrap="wrap"
          mx={[-1, -1, -2]}
        >
          <Box
            width={[1 / 2, 1 / 3, 1 / 5]}
            px={[1, 1, 2]}
            key={`box-all`}
            className={currentCategory}
            css={PaddedMobile}
          >
            <div key="alllink" css={GridBoxCategories}>
              <Link to={`/all`} css={CategoryItem}>
                <h3>All</h3>
              </Link>
            </div>
          </Box>

          {categories.edges.map(({ node }) => {
            if (catId === node.id) {
              currentCategory = "active";
            } else {
              currentCategory = "inactive";
            }
            return (
              <Box
                width={[1 / 2, 1 / 3, 1 / 5]}
                px={[1, 1, 2]}
                key={`box-${node.slug}`}
                className={currentCategory}
                css={PaddedMobile}
              >
                <div key={node.slug} css={GridBoxCategories}>
                  <Link to={`/${node.slug}`} css={{ textDecoration: `none` }}>
                    <h3>{node.name}</h3>
                  </Link>
                </div>
              </Box>
            );
          })}
        </Flex>
      </MainWrapperLite>
    </FullWidth>
  );
};

export default CategoryList;
