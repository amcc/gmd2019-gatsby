import React, { Component } from "react";
// import { Link, graphql } from "gatsby";
// import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import Layout from "../layouts";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import { rhythm } from "../utils/typography";
// import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import { PaddedMobile } from "../utils/styles";

class Info extends Component {
  render() {
    const data = this.props.data;

    return (
      <Layout>
        <Flex flexWrap="wrap">
          <Box py={4} width={1}>
            <section css={PaddedMobile}>
              <h1>Graphic Media Design</h1>
            </section>
          </Box>
          <Box py={2} width={[1, 1 / 2, 1 / 2]}>
            <section css={PaddedMobile}>
              <p>
                Final year work for Graphic Media Design students graduating in
                2018
              </p>
              <h3>Private View Wednesday 19 June 6 – 9pm</h3>
              <p>General Access Thursday 20 – Saturday 22 June</p>
              <p>Thur - Fri: 11am – 7pm Sat: 11am – 4pm</p>
            </section>
          </Box>
          <Box py={2} width={[1, 1 / 2, 1 / 2]}>
            <section css={PaddedMobile}>
              <h3>Venue</h3>
              <p>London College of Communication</p>
              <p>
                Elephant & Castle
                <br />
                London SE1 6SB
              </p>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1vWhIKMxud9J6jTtPCry4-04518y6Ie2e"
                width="100%"
                height="600"
              />
            </section>
          </Box>
        </Flex>
        {/* <Flex flexWrap="wrap">
          <Box py={4} width={1}>
            <section css={PaddedMobile}>
              <h2>Credits</h2>
            </section>
          </Box>
          <Box py={2} width={[1, 1 / 2, 1 / 2]}>
            <section css={PaddedMobile}>
              
            </section>
          </Box>
          <Box py={2} width={[1, 1 / 2, 1 / 2]}>
            <section css={PaddedMobile}>
              
            </section>
          </Box>
        </Flex> */}

        {/* <p><a href="http://2018.gmdlcc.com">2018</a></p>
      <p><a href="http://2017.gmdlcc.com">2017</a></p>
      <p><a href="http://2016.gmdlcc.com">2016</a></p> */}
      </Layout>
    );
  }
}

export default Info;
