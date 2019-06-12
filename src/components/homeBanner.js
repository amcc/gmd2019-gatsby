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
  SubtleAccent,
  MainWrapper
} from "../utils/styles";

import { rhythm } from "../utils/typography";

const CustomHeroImage = styled.div`
  /* width: auto; */
  background: ${SubtleAccent};
  height: 100vh;
  z-index: -2;
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
  font-size: 1em;
  font-weight: 300;
  h1 {
    font-size: 1em;
    color: white;
  }
  /* mix-blend-mode: difference; */

  @media (min-width: 40em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
    /* font-size: 150%; */
    h1 {
      font-size: 1em;
    }
    h3 {
      padding-left: 0;
    }
  }
  @media (min-width: 52em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
    h1 {
      font-size: 1em;
    }
    /* font-size: 1em; */
  }
  @media (min-width: 64em) {
    padding: ${rhythm(1 / 2)} 30vw 0 0;
    /* font-size: 1em; */
    h1 {
      font-size: 1em;
      font-weight: 300;
    }
  }
`;

const HomeTitle = css`
  /* font-weight: 400; */
  /* text-transform: uppercase; */
  /* text-align: center; */
`;

const Graphic = css`
  display: block;
`;
const Show = css`
  display: block;
`;
const Info = css`
  display: block;
  margin-top: ${rhythm(1)};
`;

const Bracket = styled.div`
  position: fixed;
  color: #fff;
  top: 5vh;
  /* margin-left: -8px; */
  position: fixed;
  right: 5vw;
  z-index: 0;
  font-size: 400px;
  font-family: "nb_internationalbold", Helvetica, sans-serif;
  @media (min-width: 40em) {
    font-size: 620px;
  }
`;
const Salon = styled.div`
  position: absolute;
  /* mix-blend-mode: difference; */
  z-index: 100;
  bottom: 44.5vh;
  font-weight: 200;

  font-family: "nb_internationalbold", Helvetica, sans-serif;
  /* width: 80%; */
  color: black;
  font-size: 7em;
  line-height: 0.8em;
  margin-left: 0vw;
  span {
    display: block;
    
  }
  .xix{
      margin-left: 14vw;
    }
    @media (min-width: 40em) {
      font-size: 12em;
      margin-left: 20vw;
      bottom: 25vh;
  }
`;
const HomeBanner = () => {
  return (
    <CustomHeroImage>
      <MainWrapper>
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
                  <span css={Info}>London College
of Communication<br />

Wednesday 19 June</span>
                </h1>
              </Box>
            </Flex>
          </HeroTextOverlayInner>
          <Salon css={PaddedMobile}>
            <span className="salontext">Salon</span> <span className="xix">XIX</span>
          </Salon>
        </HeroTextOverlay>
        <Bracket>&#123;</Bracket>
      </MainWrapper>
    </CustomHeroImage>
  );
};

export default HomeBanner;
