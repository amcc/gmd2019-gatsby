import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Location } from "@reach/router"; // to get the location
import Headroom from "react-headroom"; // https://kyleamathews.github.io/react-headroom/
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import {
  Accent,
  SubtleAccent,
  HeaderOffset,
  HeaderOffsetMobile,
  MainWrapper
} from "../utils/styles";
// import { rhythm } from "../utils/typography";

const headerScaler = 45;
const headerHeight = css`
  transition: all 0.3s;
  height: ${HeaderOffsetMobile - 8 + "px"};
  @media (min-width: 40em) {
    height: ${HeaderOffset + "px"};
  }
`;
const homeTitle = css`
  transition: all 0.3s;
  /* float: left; */
  font-weight: 300;
  margin: 0;
  padding-left: 0.8rem;
  padding-top: 0.5rem;
  font-size: 200%;
  @media (min-width: 40em) {
    font-size: 200%;
    padding-left: 0;
    padding-top: 1.4rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`;

const navBar = css`
  transition: all 0.3s;
  /* float: right; */
  padding-top: 2rem;
  padding-left: 0.8rem;
  padding-bottom: 0.1rem;
  /* display: none; */
  @media (min-width: 40em) {
    /* display: block; */
    padding-top: 1.93rem;
    padding-bottom: 0.3rem;
  }

  input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
  }

  input[type="checkbox"] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
  }
  .sidebarIconToggle {
    display: block;
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    /* height: 100%;
    width: 100%; */
    top: 7px;
    right: 14px;
    height: ${headerScaler}px;
    width: ${headerScaler}px;
    /* padding-top: 0.2rem; */
    padding: 10px 10px;
    @media (min-width: 40em) {
      padding: 20px 10px;
      width: ${headerScaler * 1.2}px;
      height: ${headerScaler * 1.4}px;
      top: 5px;
      right: 23px;
    }
    @media (min-width: 52em) {
      display: none;
    }
  }
  .spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 2px;
    @media (min-width: 40em) {
      height: 2px;
    }
    width: 100%;
    background-color: black;
  }
  .sidebarIconToggle:hover {
    .spinner {
      background-color: ${Accent};
    }
  }
  .sidebarIconToggle:active {
    .spinner {
      background-color: ${Accent};
    }
  }
  .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 6px;
    @media (min-width: 40em) {
      margin-top: 6px;
    }
  }
  .diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
  }
  .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 6px;
    @media (min-width: 40em) {
      margin-top: 6px;
    }
  }
  input[type="checkbox"]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
  }
  input[type="checkbox"]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
  }
  input[type="checkbox"]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -9px;
  }
  #sidebarMenu {
    display: block;
    @media (min-width: 52em) {
      display: none;
    }
    /* height: 100%; */
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    margin-top: ${HeaderOffsetMobile - 10 + "px"};
    @media (min-width: 40em) {
      margin-top: ${HeaderOffset - 10 + "px"};
    }
    transform: translateX(120vw);
    transition: transform 200ms ease-in-out;
    background: linear-gradient(180deg, #fff 0%, #ccc 100%);
  }

  .sidebarMenuInner {
    margin: 0;
    padding: 0;
    /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
  }
  .sidebarMenuInner li {
    list-style: none;
    color: #fff;
    /* text-transform: uppercase; */
    /* font-weight: 300; */
    /* padding: 20px; */
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }
  .sidebarMenuInner li span {
    display: block;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }
  .sidebarMenuInner li a {
    color: black;
    cursor: pointer;
    text-decoration: none;
    font-size: 200%;
  }
`;

// const sideBarMenu = css``;

const menuList = css`
  display: none;
  @media (min-width: 52em) {
    display: block;
  }
  /* float: right; */
  /* display: inline; */
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const menuListItem = css`
  /* float: left; */
  display: inline;
  margin: 0;
  a {
    color: black;
    /* text-align: center; */
    /* padding: 16px; */
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    color: ${Accent};
  }
  font-size: 114%;
  padding: 0.6rem 0.5rem 0.5rem 0rem;
  @media (min-width: 40em) {
    font-size: 120%;
    padding: 1rem 0 0rem 1.5rem;
  }
`;

const sidebarListItem = css`
  font-size: 80%;
  font-weight: 400;
  /* text-decoration: underline; */
  a:hover > div {
    color: white;
    background: ${Accent};
  }
  a:active > div {
    color: white;
    background: ${Accent};
  }
`;

const sidebarlink = css`
  /* background: green; */
  padding: 25px 0;
  color: ${Accent};
`;

// let currentLocation;

const Header = class extends React.Component {
  // const Header = ({ siteTitle }) => (

  constructor(props) {
    super(props);
    this.state = {
      // active: false,
      // navBarActiveClass: ""
    };
  }

  unCheck(ref) {
    this.refs[ref].checked = !this.refs[ref].checked;
  }

  render() {
    return (
      <>
        <Location>
          {({ location }) => {
            // console.log(location);
            // currentLocation = location.pathname;
            // return <p>The location is {currentLocation}</p>;
          }}
        </Location>
        <Headroom
          // onPin={() => console.log("pinned")}
          // onUnpin={() => console.log("unpinned")}
          // wrapperStyle={{ marginBottom: rhythm(1) }}
          style={{
            background: "rgb(255,255,255)",
            boxShadow: "1px 1px 15px rgba(0,0,0,0.1)",
            zIndex: 1000
          }}
        >
          <header css={headerHeight}>
            <MainWrapper>
              <Flex flexWrap="wrap">
                <Box width={[1, 2 / 6]}>
                  {/* Half width */}
                  <h1 css={homeTitle}>
                    <Link
                      to="/"
                      css={css`
                        color: black;
                      `}
                    >
                      {/* {this.props.siteTitle} */}
                      GMD
                      <span
                        css={css`
                          color: ${SubtleAccent};
                          padding: 0 2px 0 2px;
                          /* top: -3px; */
                          font-weight: 400;
                          position: relative;
                          @media (min-width: 40em) {
                            padding: 0 5px 0 6px;
                          }
                        `}
                      >
                        {`{`}
                      </span>
                      <span>Salon XIX</span>
                      <span
                        css={css`
                          color: ${SubtleAccent};
                          padding: 0 2px 0 2px;
                          /* top: -3px; */
                          font-weight: 400;
                          position: relative;
                          @media (min-width: 40em) {
                            padding: 0 5px 0 6px;
                          }
                        `}
                      >
                        {`}`}
                      </span>
                    </Link>
                  </h1>
                </Box>
                <Box
                  width={[1, 4 / 6]}
                  css={css`
                    text-align: left;
                    @media (min-width: 40em) {
                      text-align: right;
                    }
                  `}
                >
                  {/* Half width */}
                  <nav css={navBar}>
                    <ul css={menuList}>
                      <li css={menuListItem}>
                        <Link to="/students" activeStyle={{ color: "grey" }}>
                          Students
                        </Link>
                      </li>
                      <li css={menuListItem}>
                        <Link to="/about" activeStyle={{ color: "grey" }}>
                          About
                        </Link>
                      </li>
                    </ul>

                    <input
                      type="checkbox"
                      className="openSidebarMenu"
                      id="openSidebarMenu"
                      ref={"sidebarToggle"}
                    />
                    <label
                      htmlFor="openSidebarMenu"
                      className="sidebarIconToggle"
                    >
                      <div className="spinner diagonal part-1" />
                      <div className="spinner horizontal" />
                      <div className="spinner diagonal part-2" />
                    </label>
                    <div id="sidebarMenu">
                      <ul className="sidebarMenuInner">
                        <li css={sidebarListItem}>
                          <Link
                            to="/students"
                            css={css`
                              color: black;
                              text-decoration: none;
                            `}
                            onClick={() => this.unCheck("sidebarToggle")}
                            activeStyle={{ color: "lightgrey" }}
                          >
                            <div css={sidebarlink}>Students</div>
                          </Link>
                        </li>
                        <li css={sidebarListItem}>
                          <Link
                            to="/about"
                            css={css`
                              color: black;
                              text-decoration: none;
                            `}
                            onClick={() => this.unCheck("sidebarToggle")}
                            activeStyle={{ color: "lightgrey" }}
                          >
                            <div css={sidebarlink}>About</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </Box>
              </Flex>
            </MainWrapper>
          </header>
        </Headroom>
      </>
    );
  }
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
