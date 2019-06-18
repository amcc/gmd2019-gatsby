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
  GridBoxContainer,
  SubtleAccent
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
  /* display: block; */
  color: black;
  margin-top: ${rhythm(1)};

  a {
    border-bottom: 2px solid transparent;
    transition: 0.1s ease-in-out;
    padding-bottom:0.3em;
  }

  a:hover {
    border-bottom: 2px solid ${SubtleAccent};
  }
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

const navBar = css`
  /* float: right; */
  padding-top: 10px;
`;

const homeBannerDesktop = css`
  display: none;
  @media (min-width: 40em) {
    display: block;
  }
`;

const homeBannerMobile = css`
  display: block;
  padding: 1rem 1.0875rem;
  @media (min-width: 40em) {
    display: none;
  }
`;

const HomeBanner = ({ text }) => {
  return (
    <CustomHeroImage>
      <MainWrapper>
        <HeroTextOverlay>
          <HeroTextOverlayInner>
            <div css={homeBannerDesktop}>
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
                      <a css={Info}>More Info &#8594;</a>
                    </Link>
                  </span>
                </Box>
              </Flex>
            </div>
            <div css={homeBannerMobile}>
              <Flex flexWrap="wrap" mx={[1, -1, -2]}>
                <Box width={[1, 1, 1 / 4]}>
                  <p>
                    <Link to="/students">Students</Link>
                    <span>/</span>
                    <Link to="/info">Info</Link>
                  </p>
                  <p>London College of Communication</p>
                  <p>Elephant &amp; Castle London SE1 6SB </p>
                  <Link to="/info">Directions &#8594;</Link>
                </Box>
                <Box width={[1, 1, 1 / 4]}>
                  {/* Half width */}
                  <nav css={navBar} />
                </Box>

                <Box width={[1, 1, 1 / 4]}>
                  <p>Private View</p>
                  <p>Wednesday 19 June 6-9 pm </p>
                </Box>
                <Box width={[1, 1, 1 / 4]}>
                  <p>General Access</p>
                  <p>Thursday 20 – Saturday 22 June</p>
                  <p>Thur - Fri: 11am – 7pm Sat: 11am – 4pm</p>
                </Box>
              </Flex>
            </div>
          </HeroTextOverlayInner>
        </HeroTextOverlay>
      </MainWrapper>
    </CustomHeroImage>
  );
};

export default HomeBanner;
