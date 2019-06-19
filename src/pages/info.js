import React, { Component } from "react";
// import { Link, graphql } from "gatsby";
// import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid
import Layout from "../layouts";
import { css } from "@emotion/core"; // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-emotion/src/pages/index.js
// import { rhythm } from "../utils/typography";
// import styled from "@emotion/styled";
import { Flex, Box } from "@rebass/grid/emotion"; //https://github.com/rebassjs/grid

import { PaddedMobile, SubtleAccent } from "../utils/styles";
import { rhythm } from "../utils/typography";

const Credits = css`
  h3 {
    color: ${SubtleAccent};
  }
  section {
    padding-top: ${rhythm(2)};
  }
`;

class Info extends Component {
  render() {
    const data = this.props.data;

    return (
      <Layout>
        <Flex flexWrap="wrap" css={Credits}>
          <Box py={4} px={[0, 1, 2]} width={1}>
            <section css={PaddedMobile}>
              <h1>Graphic Media Design</h1>
            </section>
          </Box>
          <Box py={2} px={[0, 1, 2]} width={[1, 1 / 2, 1 / 2]}>
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
          <Box py={2} px={[0, 1, 2]} width={[1, 1 / 2, 1 / 2]}>
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
        <Flex flexWrap="wrap" css={Credits}>
          <Box py={4} px={[0, 1, 2]} width={1}>
            <section css={PaddedMobile}>
              <h2>Credits</h2>
            </section>
          </Box>
          <Box py={2} px={[0, 1, 2]} width={[1, 1 / 2, 1 / 2]}>
            <section css={PaddedMobile}>
              <h3>GMD 18/19 Final Year Tutors</h3>
              <p>Monica Biagioli</p>
              <p>Craig Burston (Course Leader)</p>
              <p>Siân Cook</p>
              <p>Maria Da Gandra (3rd Year Coordinator)</p>
              <p>Lisa Gellender</p>
              <p>John-Patrick Harnett</p>
              <p>Penny Hilton</p>
              <p>Tim Hutchinson</p>
              <p>Christopher May</p>
              <p>Alistair McClymont</p>
              <p>Robert Mowbray</p>
            </section>
          </Box>
          <Box py={2} px={[0, 1, 2]} width={[1, 1 / 2, 1 / 2]}>
            {/* <section css={PaddedMobile}>
              <h3>Show Teams</h3>
            </section> */}
            <section css={PaddedMobile}>
              <h3>Photography</h3>
              <p>Emily Bowen</p>
              <p>Alice Chachka</p>
              <p>Jasmine Engel-Malone</p>
              <p>Maxwell Fabiano da Silva</p>
              <p>Tamara Khasanova</p>
              <p>Alissa Metsnik</p>
              <p>Anete Sreibere</p>
              <p>Bab Tabase</p>
              <p>Agathe Trouette</p>
              <br />
              <p>Maria Da Gandra (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <h3>Website</h3>
              <p>Melissa Berney</p>
              <p>Carina Figueiredo</p>
              <p>Maria Hristoforova</p>
              <p>Benedict Povey</p>
              <br />
              <p>Alistair McClymont (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <h3>Screens</h3>
              <p>Emily Bowen</p>
              <p>Yeon Jin Kim</p>
              <p>Tamara Khasanova</p>
              <p>Verity Grace</p>
              <p>Xingyi Ou</p>
              <p>Benedict Povey</p>
              <p>Agathe Trouette</p>
              <p>Xingyi Ou</p>
              <p>Tabriaz Waheed</p>
              <br />
              <p>Alistair McClymont (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <h3>Social Media</h3>
              <p>Sam Carballo</p>
              <p>Connor Wilson</p>
              <p>Jo Lee</p>
              <p>Julia Lessa</p>
              <p>Inhae Sohn</p>
              <p>Coralie Zimmerman</p>
              <br />
              <p>Siân Cook (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <h3>Publication</h3>
              <p>Qiwen Chen</p>
              <p>Ha Eun Kim</p>
              <p>Benedict Povey</p>
              <p>Chloe Sin</p>
              <br />
              <p>Tim Hutchinson (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <h3>Invite</h3>
              <p>Megan London</p>
              <p>Alissa Metsnik</p>
              <p>Koar Tsinarian</p>
              <br />
              <p>Maria Da Gandra (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <h3>Experiential Curation</h3>
              <p>Stephanie Fung</p>
              <p>Inhae Sohn</p>
              <p>Harriet Stallard</p>
              <p>Anna Sycheva</p>
              <p>Hugh Van Der Lande</p>
              <p>Yebin Zheng</p>
              <br />
              <p>Penny Hilton (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <h3>Wall Curation</h3>
              <p>Emily Bowen</p>
              <p>Oli East</p>
              <p>Tom Gotainer</p>
              <p>Ha Run Kim</p>
              <p>Jo Lee</p>
              <p>Megan London</p>
              <p>Agathe Trouette</p>
              <br />
              <p>Maria Da Gandra (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <h3>Vitrines, Shelves and Annex Curation</h3>
              <p>Marion Bisserier</p>
              <p>Maxwel Fabiano Da Silva</p>
              <p>Tom Medlicott</p>
              <p>Benedita Melo Souto</p>
              <p>Jack Stutchbury</p>
              <p>Stephanie Tan</p>
              <br />
              <p>Monica Biagioli (Coordinator)</p>
            </section>
            <section css={PaddedMobile}>
              <p>All text (copyright) the authors.</p>
              <p>
                Printed by Print Media Department, London College of
                Communication — thanks to Tony Yard, Scott House and Dan
                Fletcher
              </p>
              <p>
                Set in NB International by Neubau Berlin — thanks to Stefan
                Gandl, Neubau Berlin.
              </p>
              <p>
                A final big thank you also all GMD + CTS tutors, workshop
                technicians, LCC library and support staff.
              </p>
              <p>@gmdlcc</p>
              <p>#salonxix</p>
              <p>www.arts.ac.uk/lcc</p>
              <p>@lcclondon</p>
            </section>
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
