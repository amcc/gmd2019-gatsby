import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { Video } from "cloudinary-react"
import { Flex, Box } from "@rebass/grid/emotion" //https://github.com/rebassjs/grid

import { css } from "@emotion/core"
import {
  HeaderOffset,
  HeaderOffsetMobile,
  PaddedMobile,
  MainWrapper,
  GridBoxContainer,
  SubtleAccent,
} from "../utils/styles"

import { rhythm } from "../utils/typography"

const CustomHeroImage = styled.div``
const HeroTextOverlay = styled.div``
const HeroTextOverlayInner = styled.div``

const HomeTitle = css``

const Info = css`
  font-family: "nb_internationalmono";
  letter-spacing: -0.025em;
  /* display: block; */
  color: black;
  margin-top: ${rhythm(1)};

  a {
    border-bottom: 2px solid transparent;
    transition: 0.1s ease-in-out;
    padding-bottom: 0.3em;
  }

  a:hover {
    border-bottom: 2px solid ${SubtleAccent};
  }
`

const JustifyStart = css`
  text-align: left;
  @media (min-width: 40em) {
    text-align: left;
  }
`
const JustifyCenter = css`
  text-align: left;
  @media (min-width: 40em) {
    text-align: center;
  }
`
const JustifyEnd = css`
  text-align: left;
  @media (min-width: 40em) {
    text-align: right;
  }
`

const navBar = css`
  /* float: right; */
  padding-top: 10px;
`

const homeBannerDesktop = css`
  display: none;
  @media (min-width: 40em) {
    display: block;
  }
`

const homeBannerMobile = css`
  display: block;
  padding: 1rem 1.0875rem;
  @media (min-width: 40em) {
    display: none;
  }
`

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
                  <span css={Info}>
                    BA Graphic Media Design 2019, London College of
                    Communication
                  </span>
                </Box>
                <Box
                  width={[1, 1, 1 / 3]}
                  px={[1, 1, 2]}
                  key={`date`}
                  css={[GridBoxContainer, PaddedMobile, JustifyCenter]}
                >
                  <span css={Info}>
                    <p>
                      <a href="https://gmdlcc.com/archive">view our archive</a>
                    </p>
                  </span>
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
  )
}

export default HomeBanner
