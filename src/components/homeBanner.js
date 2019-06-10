import PropTypes from "prop-types";
import React from "react";
// import { rhythm } from "../utils/typography"
import styled from "@emotion/styled";
// import { Video } from "cloudinary-react"
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import { css } from "@emotion/core";
import {
  HeaderOffset,
  HeaderOffsetMobile,
  PaddedMobile,
  SubtleAccent
} from "../utils/styles";

import { rhythm } from "../utils/typography";

const CustomHeroImage = styled.div`
  /* width: auto; */
  background: ${SubtleAccent};
  height: 100vh;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  margin-top: -${HeaderOffsetMobile}px;
  > div,
  a > div {
    height: 100vh;
  }
  @media (min-width: 40em) {
    height: 100vh;
    /* height: 100vh; */
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    margin-top: -${HeaderOffset}px;
    > div,
    a > div {
      height: 100vh;
    }
  }
`;
const HeroTextOverlay = styled.div`
  position: absolute;
  top: ${HeaderOffset}px;
  z-index: 1;
  height: 100%;
`;
const HeroTextOverlayInner = styled.div`
  /* height: 60%; */
  width: 100%;
  color: white;
  a {
    color: white;
  }
  margin-top: 3vw;
  padding: ${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(1 / 2)};
  font-size: 90%;
  font-weight: 300;
  h1 {
    /* font-size: 160%; */
    color: white;
  }
  /* mix-blend-mode: difference; */

  @media (min-width: 40em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
    font-size: 150%;
    h1 {
      font-size: 150%;
    }
    h3 {
      padding-left: 0;
    }
  }
  @media (min-width: 52em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
    h1 {
      font-size: 160%;
    }
    font-size: 150%;
  }
  @media (min-width: 64em) {
    padding: ${rhythm(1 / 2)} 30vw 0 0;
    font-size: 160%;
    h1 {
      font-size: 180%;
      font-weight: 300;
    }
  }
`;

const HomeTitle = css`
  /* font-weight: 400; */
  text-transform: uppercase;
  /* text-align: center; */
`;

const Graphic = css`
  display: block;
`;
const Show = css`
  display: block;
`;

const Bracket = styled.div`
  position: fixed;
  color: #fff;
  top: -20vh;
  /* margin-left: -8px; */
  position: fixed;
  right: 5vw;
  z-index: 0;
  font-size: 820px;
`;
const Salon = styled.div`
  position: absolute;
  /* mix-blend-mode: difference; */
  z-index: 100;
  bottom: 50vh;
  font-weight: 200;
  /* width: 80%; */
  color: black;
  font-size: 8em;
`;
const HomeBanner = ({ text }) => {
  return (
    <CustomHeroImage>
      <section>
        <HeroTextOverlay
          css={css`
            /* mix-blend-mode: difference; */
          `}
        >
          <HeroTextOverlayInner>
            <Flex>
              <Box px={2}>
                <h1 css={HomeTitle}>
                  <span css={Graphic}>Graphic and Media Design</span>
                  <span css={Show}>Degree Show 2019</span>
                </h1>
              </Box>
            </Flex>
          </HeroTextOverlayInner>
          <Salon css={PaddedMobile}>
            <h2>Salon XIX</h2>
          </Salon>
        </HeroTextOverlay>
        <Bracket>&#123;</Bracket>
      </section>
    </CustomHeroImage>
  );
};

export default HomeBanner;
