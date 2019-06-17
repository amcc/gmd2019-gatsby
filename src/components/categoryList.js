import React from "react";
import { Link } from "gatsby";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import { css } from "@emotion/core";
import {
  GridBoxContainer,
  PaddedMobile,
  SubtleAccent,
} from "../utils/styles";

import { rhythm } from "../utils/typography";

const CategoryListStyle = css`
  margin-top: ${rhythm(2)};
  position: relative;
  z-index: 2;
  background: #ececec;
  padding: ${rhythm(1)};
  .active {
    a{
      h3{
        color:${SubtleAccent};
      }

      h3::after{
        content: "{";
      }
    }
    
  }
  .
`;

const CategoryList = ({ categories, catId }) => {
  return (
    <Flex
      // mx={[0, -1, -2]}
      flexWrap="wrap"
      css={CategoryListStyle}
      mx={[-1, -1, -2]}
    >
      <Box width={1} px={[1, 1, 2]} key={`box-categories`} />

      {categories.edges.map(({ node }) => {
        console.log(catId);
        console.log(node.id);
        let currentCategory;
        if (catId == node.id) {
          currentCategory = "active";
        } else {
          currentCategory = "inactive";
        }
        return (
          <Box
            width={[1 / 2, 1 / 3, 1 / 5]}
            px={[1, 1, 2]}
            key={`box-${node.slug}`}
            css={[GridBoxContainer, PaddedMobile]}
            className={currentCategory}
          >
            <div key={node.slug}>
              <Link to={`/${node.slug}`} css={{ textDecoration: `none` }}>
                <h3>{node.name}</h3>
              </Link>
            </div>
          </Box>
        );
      })}
    </Flex>
  );
};

export default CategoryList;
