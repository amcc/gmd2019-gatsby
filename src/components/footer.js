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
  padding: 3rem 1rem;
  background: ${SubtleAccent};
  color: white;
  h1 {
    a {
      color: white;
      a:hover {
        color: white;
      }
    }
  }

  a, p{
    color:white;
    letter-spacing: -0.1em;
  }

  a{
    border-bottom: 2px solid transparent;
    transition: 0.1s ease-in-out;
    padding-bottom:0.3em;
  }
  a:hover{
    color:black;
    border-bottom: 2px solid black;
  }
`;

const navBar = css`
  padding-top: 10px;
`;

const Footer = ({ siteTitle }) => (
  <footer
    css={css`
      background: ${SubtleAccent};
    `}
  >
    <FooterInner>
      <Flex
        flexWrap="wrap"
        mx={[-1, -1, -2]}
      >
        <Box width={[1,1,1 / 4]}>
          <p>
            <Link 
            css={css`
            color: white;
          ` } 
            to="/students"><a>Students</a></Link>
            <span> / </span>
            <Link 
            css={css`
            color: white;
          ` } 
            to="/info"><a>Info</a></Link>
          </p>
          <p>London College of Communication</p>
          <p>Elephant &amp; Castle London SE1 6SB </p>
          <Link
          css={css`
          color: white;
        ` } 
          to="/info"><a>Directions &#8594;</a></Link>
        </Box>
        <Box width={[1,1,1 / 4]}>
          {/* Half width */}
          <nav css={navBar} />
        </Box>

        <Box width={[1,1,1 / 4]}>
          <p>Private View</p>
          <p>Wednesday 19 June 6-9 pm </p>
        </Box>
        <Box width={[1,1,1 / 4]}>
          <p>General Access</p>
          <p>Thursday 20 – Saturday 22 June</p>
          <p>Thur - Fri: 11am – 7pm<br/> Sat: 11am – 4pm</p>
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
