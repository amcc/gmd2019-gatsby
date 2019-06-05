import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { rhythm } from "../utils/typography";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const CustomHeroImage = styled.div`
  /* width: auto; */
  height: 66vh;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  > div,
  a > div {
    height: 66vh;
  }
  @media (min-width: 40em) {
    height: 65vh;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    > div,
    a > div {
      height: 65vh;
    }
  }
`;

const HalfHeroImage = ({ image, link }) => {
  return (
    <CustomHeroImage key={`featured-${link}`}>
      {link ? (
        <Link to={`/${link}`} css={{ textDecoration: `none` }}>
          <Img
            css={{ marginBottom: rhythm(1) }}
            key={{ image }.src}
            fluid={image}
          />
        </Link>
      ) : (
        <Img
          css={{ marginBottom: rhythm(1) }}
          key={{ image }.src}
          fluid={image}
        />
      )}
    </CustomHeroImage>
  );
};

HalfHeroImage.propTypes = {
  image: PropTypes.object,
  link: PropTypes.string
};

HalfHeroImage.defaultProps = {
  image: ``,
  link: null
};

export default HalfHeroImage;
