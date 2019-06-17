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
  MainWrapper
} from "../utils/styles";

import { rhythm } from "../utils/typography";

const CustomHeroImage = styled.div`
  /* width: auto; */
  background: white;
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

const Info = css`
  font-family: "nb_internationalmono";
  letter-spacing: -0.025em;
  display: block;
  color: black;
  margin-top: ${rhythm(1)};
`;

const Salon = styled.div`
  font-family: "nb_internationalbold", Helvetica, sans-serif;
  color: black;
  font-size: 7em;
  line-height: 0.8em;
  display:none;

  @media (min-width: 40em) {
    font-size: 14em;
    margin-left: 10vw;
    bottom: 25vh;
    display:block;
  }
`;
const HomeBanner = ({ text }) => {
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
              <Box>
                <h1 css={HomeTitle}>
                  <span css={Info}>London College <br/> of Communication</span>
                  <span css={Info}>19 - 22 June</span>
                </h1>
              </Box>
            </Flex>
          </HeroTextOverlayInner>
          <Salon css={PaddedMobile}>
            {/* <span>
              &#123;<span />
            </span>
            <span className="salontext">Salon XIX</span>
            */}
          </Salon>
        </HeroTextOverlay>
      </MainWrapper>
    </CustomHeroImage>
  );
};

export default HomeBanner;
