import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { css } from "@emotion/core";
import { GridHeader } from "../utils/styles";

const ImgBorder = css`
  border: 1px solid #ececec;
`;

const StudentGridItem = ({ node }) => {
  return (
    <Link to={`/${node.slug}`} css={{ textDecoration: `none` }}>
      {node.acf.featured_image && node.acf.featured_image.localFile && (
        <Img
          css={ImgBorder}
          key={node.acf.featured_image.localFile.childImageSharp.fluid.src}
          fluid={node.acf.featured_image.localFile.childImageSharp.fluid}
        />
      )}
      <h3 css={GridHeader}>{node.title}</h3>
    </Link>
  );
};

export default StudentGridItem;
