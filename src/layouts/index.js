import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet';
import Header from "../components/header"
// import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { css } from "@emotion/core";
// import styled from "@emotion/styled";
import {GlobalStyle, MainWrapper} from "../utils/styles"
// import './all.sass'
// Using css with a template literal
const main = css`
  margin-top: 0px;
`

const Layout = ({ children }) => {
  // console.log(children);
  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={`MA:UX`}
          meta={[{ name: "description", content: "MA User Experience Design" }]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>
          <main css={main}>{children}</main>
        </MainWrapper>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
