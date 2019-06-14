import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
// import { rhythm } from "../utils/typography";
import { SubtleAccent } from "../utils/styles";

const FooterInner = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 1rem 1.0875rem;
  background: ${SubtleAccent};
  color: white;
  /* height: 5rem; */
  h1 {
    a {
      color: white;
      a:hover {
        color: white;
      }
    }
  }
`;


const navBar = css`
  /* float: right; */
  padding-top: 10px;
`;

const Footer = ({ siteTitle }) => (
  <footer
    css={css`
      background: ${SubtleAccent};
    `}
  >
    <FooterInner>
      <Flex>
        <Box width={1 / 4}>
          <p>
            <Link to="/students">Students</Link>
            <span>/</span>
            <Link to="/info">Info</Link>
          </p>
          <p>London College of Communication</p>
          <p>Elephant &amp; Castle London SE1 6SB </p>
          <Link to="/info">Directions →</Link>
        </Box>
        <Box width={1 / 4}>
          {/* Half width */}
          <nav css={navBar} />
        </Box>

        <Box width={1 / 4}>
          <p>Private View</p>
          <p>Wednesday 19 June 6-9 pm </p>
        </Box>
        <Box width={1 / 4}>
          <p>General Access</p>
          <p>Thursday 20 – Saturday 22 June</p>
          <p>Thur - Fri: 11am – 7pm Sat: 11am – 4pm</p>
        </Box>
      </Flex>
    </FooterInner>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
