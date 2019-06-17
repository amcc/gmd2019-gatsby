import PropTypes from "prop-types"
import React from "react"
// import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
// import { Video } from "cloudinary-react"
import { css } from "@emotion/core"
import { HeaderOffset, HeaderOffsetMobile } from "../utils/styles"

const CustomHeroImage = styled.div`
  /* width: auto; */
  /* height: ${HeaderOffsetMobile}vh; */
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  height: auto;
  width: 100vw;
  /* margin-top: -${HeaderOffsetMobile}px; */
`

const HomeVideo = ({ video }) => {
  return (
    <CustomHeroImage>
      {/* <Video
        // css={css`
        //   width: 100%;
        //   height: auto;
        // `}
        cloudName="amcc"
        publicId={video}
        // controls="true"
        autoPlay 
        loop
        playsInline
        muted
      /> */}
      {/* <video autoPlay muted="true" loop playsInline>
        <source
          src="https://res.cloudinary.com/amcc/video/upload/v1559078362/Comp_2_2_c6wxxb.mp4"
          type="video/mp4"
        />
      </video> */}

      <div
        css={css`
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          -webkit-justify-content: center;
          justify-content: center;
          overflow: hidden;
          video {
            object-fit: cover;
            width: 100vw;
            height: auto;
          }
        `}
        //   dangerouslySetInnerHTML={{
        //     __html: `
        //   <video autoplay loop muted playsinline>
        //     <source src="https://res.cloudinary.com/gmdlcc/video/upload/v1560775058/Animation_Show_fgra1b.mov" type="video/mp4">
        //   </video>
        // `,
        //   }}
        dangerouslySetInnerHTML={{
          __html: `
        <video autoplay loop muted playsinline>
          <source src="${video}" type="video/mp4">
        </video>
      `,
        }}
      />
    </CustomHeroImage>
  )
}

HomeVideo.propTypes = {
  video: PropTypes.string,
}

HomeVideo.defaultProps = {
  video: ``,
}

export default HomeVideo
