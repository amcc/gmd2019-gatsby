import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
// import { Video } from "cloudinary-react"
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import { css } from "@emotion/core";
import {
  HeaderOffset,
  HeaderOffsetMobile,
  PaddedMobile,
  MainWrapper,
  GridBoxContainer
} from "../utils/styles";

import { rhythm } from "../utils/typography";

const CustomHeroImage = styled.div`
  /* background: white;
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
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    margin-top: -${HeaderOffset}px;
    > div,
    a > div {
      height: 100vh;
    }
  } */
`;
const HeroTextOverlay = styled.div``;
const HeroTextOverlayInner = styled.div`
  /* width: 100%;
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

  @media (min-width: 40em) {
    padding: ${rhythm(1 / 2)} 20vw 0 0;
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
  }
  @media (min-width: 64em) {
    padding: ${rhythm(1 / 2)} 30vw 0 0;
    h1 {
      font-size: 1em;
      font-weight: 300;
    }
  } */
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

const JustifyStart = css`
  text-align: left;
  @media (min-width: 40em) {
    text-align: left;
  }
`;
const JustifyCenter = css`
  text-align: left;
  @media (min-width: 40em) {
    text-align: center;
  }
`;
const JustifyEnd = css`
  text-align: left;
  @media (min-width: 40em) {
    text-align: right;
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
            <Flex
              // mx={[0, -1, -2]}
              flexWrap="wrap"
              mx={[-1, -1, -2]}
            >
              <Box
                width={[1, 1, 1 / 3]}
                px={[1, 1, 2]}
                key={`place`}
                css={[GridBoxContainer, PaddedMobile, JustifyStart]}
              >
                <span css={Info}>London College of Communication</span>
              </Box>
              <Box
                width={[1, 1, 1 / 3]}
                px={[1, 1, 2]}
                key={`date`}
                css={[GridBoxContainer, PaddedMobile, JustifyCenter]}
              >
                <span css={Info}>19 - 22 June</span>
              </Box>
              <Box
                width={[1, 1, 1 / 3]}
                px={[1, 1, 2]}
                key={`info`}
                css={[GridBoxContainer, PaddedMobile, JustifyEnd]}
              >
                <span css={Info}>
                  <Link to={`/info`} css={{ textDecoration: `none` }}>
                    <span css={Info}>More Info ></span>
                  </Link>
                </span>
              </Box>
            </Flex>
          </HeroTextOverlayInner>
        </HeroTextOverlay>
      </MainWrapper>
    </CustomHeroImage>
  );
};

export default HomeBanner;
