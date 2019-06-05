import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { rhythm } from "../utils/typography";

const MaxWidth = `1400px`;
export const HeaderOffset = "70";
export const HeaderOffsetMobile = "61";

export const Accent = `#5e6b79`;
// export const SubtleAccent = `#f5f7f9`;
export const SubtleAccent = `gold`;

const BoxShadowH = `0px`;
const BoxShadowV = `3px`;
const BoxShadowBlur = `5px`;
const BoxShadowSpread = `0px`;
//112,128,144 = SlateGrey
export const BoxShadowColour = `rgba(112,128,144,0.19)`;
export const BoxShadow = `box-shadow: ${BoxShadowH} ${BoxShadowV} ${BoxShadowBlur} ${BoxShadowSpread} ${BoxShadowColour}`;

const RadiusTL = `4px`;
const RadiusTR = `4px`;
const RadiusBR = `4px`;
const RadiusBL = `4px`;
export const BorderRadius = `border-radius: ${RadiusTL} ${RadiusTR} ${RadiusBR} ${RadiusBL}`;

const GridHeaderSize = `120%`;
const GridHeaderSizeMobile = `90%`;

// rebass grid breakpoints
// 40em, 52em, 64em
export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      html,
      body {
        /* the above makes scrolling screw up on iphone */
        /* -webkit-overflow-scrolling: touch; */
        height: 100%;
      }
      body {
        margin: 0;
        background: #fefefe;
      }
      h1 {
        font-weight: 600;
        font-size: 220%;
      }
      h2 {
        font-weight: 600;
        font-size: 150%;
      }
      a:hover {
        text-decoration: underline;
      }

      /* iphones will zoom when clicking on a select - this might solve it */
      /* Mobile first */
      input,
      textarea,
      select,
      button {
        font-size: 16px;
      }
      /* Tablet upwards */
      @media (min-width: 768px) {
        font-size: 14px;
      }
    `}
  />
);

export const StyledImg = styled(Img)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: ${MaxWidth};

  @media (min-width: 40em) {
    /* padding: 0px 1.0875rem 1.45rem; */
    padding: 0px ${rhythm(1)};
    font-size: 100%;
  }
`;

export const PostMain = styled.div`
  /* width: auto; */
  /* margin-top: ${rhythm(2)}; */
`;
export const PostTitleItems = styled.div`
  /* width: auto; */
  margin-bottom: ${rhythm(2)};
`;
export const TitleMeta = css`
  color: gold;
  margin-right: ${rhythm(1)};
`

export const Padded = css`
  padding: 0 ${rhythm(1)};
  @media (min-width: 40em) {
    /* padding: 0px 1.0875rem 1.45rem; */
    /* padding: 0px 1.0875rem; */
    /* font-size: 100%; */
  }
`;
export const PaddedMobile = css`
  padding: 0 ${rhythm(1)};
  @media (min-width: 40em) {
    padding: 0;
  }
`;
//
export const FullWidth = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;

export const MarginTopPost = css`

  margin-top: ${rhythm(3)};
  @media (min-width: 40em) {
    margin-top: ${rhythm(3)};
  }
`;

export const GridBoxContainer = css`
  > div:hover {
    background: ${SubtleAccent};
  }
  > div:active {
    background: ${SubtleAccent};
  }
  transition: all 0.5s;
`;
export const GridBox = css`
  overflow: hidden;
  margin: 0 auto;
  max-width: 960px;
  /* padding: 0.5rem 0; */
  margin-bottom: ${rhythm(2)};
  background: white;
  ${BoxShadow};
  ${BorderRadius};
  a > div {
    height: 120px;
    @media (min-width: 40em) {
      height: 200px;
    }
    @media (min-width: 52em) {
      height: 180px;
    }
    @media (min-width: 64em) {
      height: 230px;
    }
  }
  h3 {
    
  }
  a {
    text-decoration: none;
  }
`;
export const GridHeader = css`
  font-size: ${GridHeaderSizeMobile};
  padding: ${rhythm(1 / 4)} ;
  font-weight: 400;
  margin-bottom: 0;
  @media (min-width: 40em) {
    font-size: ${GridHeaderSize};
    padding: ${rhythm(1 / 3)};
  }
  
`;
export const GridSectionHeader = css`
  /* margin-bottom: 0; */
  /* font-size: ${GridHeaderSizeMobile};
  @media (min-width: 40em) {
    font-size: ${GridHeaderSize};
  } */
  color: ${Accent};
`;
