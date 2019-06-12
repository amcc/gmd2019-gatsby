import React, { Component } from "react";
// import { Link, graphql } from "gatsby";
// import { FaRegClock } from "react-icons/fa";
// import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
// import Img from "gatsby-image";
import Layout from "../layouts";
//import PostIcons from "../components/post-icons";
// import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import HeroImage from "../components/heroimage";
// import { rhythm } from "../utils/typography";
// import styled from "@emotion/styled";
// import {
//   GridBoxContainer,
//   GridSectionHeader,
//   GridBox,
//   GridHeader
// } from "../utils/styles";


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
