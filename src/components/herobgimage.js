import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
import styled from "@emotion/styled";

const CustomHeroImage = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  /* overflow: hidden;
  position: relative;
  img {
    position: absolute;

top: 50%;
transform: translate(0, -50%);
-webkit-transform: translate(0, -50%);
-moz-transform: translate(0, -50%);
-ms-transform: translate(0, -50%);
  } */
`;

const HeroBgImage = ({ image }) => (
  <CustomHeroImage 
    key={`featured`}
    
    css={css`
      background: url("${image.src}");
      /* height: 400px; */
      object-fit: cover;
    `}
  >
    {/* <Img
      css={{ marginBottom: rhythm(1) }}
      key={{image}.src}
      fluid={image}
    /> */}
  </CustomHeroImage>
);

HeroBgImage.propTypes = {
  image: PropTypes.object
};

HeroBgImage.defaultProps = {
  image: ``
};

export default HeroBgImage;
