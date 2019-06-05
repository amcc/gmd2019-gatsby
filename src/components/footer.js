import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
// import { rhythm } from "../utils/typography";

const FooterInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
  background: black;
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

const homeTitle = css`
  padding: 2rem 0;
  margin: 2rem 0;
`;

const navBar = css`
  /* float: right; */
  padding-top: 10px;
`;

const Footer = ({ siteTitle }) => (
  <footer
    css={css`
      background: black;
    `}
  >
    <FooterInner>
      <Flex>
        <Box width={1 / 3}>
          {/* Half width */}
          <h1 css={homeTitle}>
            <Link
              to="/"
              css={css`
                color: white;
                text-decoration: none;
              `}
            >
              {siteTitle}
            </Link>
          </h1>
        </Box>
        <Box
          width={2 / 3}
          css={css`
            text-align: right;
          `}
        >
          {/* Half width */}
          <nav css={navBar} />
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
