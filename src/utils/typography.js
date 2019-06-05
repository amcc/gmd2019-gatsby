import Typography from "typography"
import alton from "typography-theme-alton"
// import { underline } from "ansi-colors";

alton.omitGoogleFont = true
alton.headerLineHeight = 1.1
alton.overrideThemeStyles = () => {
  return {
    a: {
      color: `black`,
      textDecoration: `underline`,
    },
    h1: {
      lineHeight: 1,
      marginTop: `0.4rem`,
    },
  }
}

alton.baseFontSize = "16px"
// alton.baseLineHeight = 1
alton.headerFontFamily = ['Lato', 'sans-serif']
// fairyGateTheme.bodyFontFamily = ['Dosis', 'sans-serif']
// alton.googleFonts = [
//   {
//     name: 'Lato',
//     styles: [
//       '400',
//       '700'
//     ],
//   }
// ]


// let bodyFontFamily = ["Roboto", "Helvetica", "Arial", "sans-serif"];
// let headerFontFamily = bodyFontFamily;

// const typography = new Typography({
//     baseFontSize    : "16px",
//     baseLineHeight  : 1,
//     omitGoogleFont  : true,
//     headerFontFamily: headerFontFamily,
//     bodyFontFamily  : bodyFontFamily
// });

const typography = new Typography(alton)

export const { rhythm, scale } = typography
export default typography
