import React, { Component } from "react";
import { Link, graphql } from "gatsby";
// import { FaRegClock } from "react-icons/fa";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import Img from "gatsby-image";
import Layout from "../layouts";
//import PostIcons from "../components/post-icons";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import HeroImage from "../components/heroimage";
import { FaChevronDown } from "react-icons/fa";
import { rhythm } from "../utils/typography";
import styled from "@emotion/styled";
import {
  GridBoxContainer,
  GridSectionHeader,
  GridBox,
  GridHeader
} from "../utils/styles";
// import smoothscroll from 'smoothscroll-polyfill';

const HeroContainer = styled.div`
  position: relative;
`;
const HeroStyles = css``;
const HeroTextOverlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
`;
const HeroTextOverlayInner = styled.div`
  height: 60%;
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
  mix-blend-mode: difference;

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
const DownArrow = styled.div`
  /* height: 30%; */
  text-align: center;
  font-size: 270%;
  @media (min-width: 40em) {
    font-size: 400%;
  }
`;
const DownArrowButton = css`
  color: white;
  /* opacity: 0.8; */
  cursor: pointer;
  height: 100%;
`;

class Info extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //    field: value
    // }
    //creates a reference for your element to use
    this.myDivToFocus = React.createRef();
  }

  // load the smoothscroll here as it requires window:
  // https://github.com/webpack/react-starter/issues/37
  componentDidMount() {
    const smoothscroll = require("smoothscroll-polyfill");
    // kick off the polyfill!
    // this hopefully fixes ios smooth
    smoothscroll.polyfill();
  }

  handleOnClick = event => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  render() {
    const data = this.props.data;

    return (
      <Layout>
        <h1>
        Graphic Media Design
        </h1>
      <p>
      London College of Communication Elephant & Castle London SE1 6SB Directions → Private View Wednesday 19 June 6 – 9pm General Access Thursday 20 – Saturday 22 June Thur - Fri: 11am – 7pm Sat: 11am – 4pm
        
      </p>
      <h2>Previous years work:</h2>
      <p><a href="http://2018.gmdlcc.com">2018</a></p>
      <p><a href="http://2017.gmdlcc.com">2017</a></p>
      <p><a href="http://2016.gmdlcc.com">2016</a></p>
        
      </Layout>
    );
  }
}

export default Info;
