import React, { Component } from "react";
// import { Link, graphql } from "gatsby";
// import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import Layout from "../layouts";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import { rhythm } from "../utils/typography";
// import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import {
  PaddedMobile
} from "../utils/styles";

class Info extends Component {
  render() {
    const data = this.props.data;

    return (
      <Layout>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 2]} css={PaddedMobile}>
            <h1>Graphic Media Design</h1>
            <p>
              London College of Communication Elephant & Castle London SE1 6SB
              Directions → Private View Wednesday 19 June 6 – 9pm General Access
              Thursday 20 – Saturday 22 June Thur - Fri: 11am – 7pm Sat: 11am –
              4pm
            </p>
          </Box>
        </Flex>

        {/* <p><a href="http://2018.gmdlcc.com">2018</a></p>
      <p><a href="http://2017.gmdlcc.com">2017</a></p>
      <p><a href="http://2016.gmdlcc.com">2016</a></p> */}
      </Layout>
    );
  }
}

export default Info;
