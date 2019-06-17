import React from "react"
import { css } from "@emotion/core";

const VideoStyle = css`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
 iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
   }
`;


const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  // console.log(videoSrcURL)
  //https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti
  
  // decide whether we have youtube or vimeo
  let source
  let search = videoSrcURL.includes("youtu")
  if(search){
    source = "https://youtube.com/embed/"
  } else {
    source = "https://player.vimeo.com/video/"
  }

  // find the code on the video
  let nSlash = videoSrcURL.lastIndexOf("/")
  let resultOne = videoSrcURL.substring(nSlash + 1)
  let videoCode = resultOne
  // sometimes youtube urls have a watch?= bit in them...
  let nEqual = videoSrcURL.lastIndexOf("=")
  let videoCodeFinal
  if ((nEqual === -1)) {
    videoCodeFinal = videoCode
  } else {
    let resultTwo = videoSrcURL.substring(nEqual + 1)
    videoCodeFinal = resultTwo
  }

  return (
    <div css={VideoStyle}>
      <iframe
        src={`${source}${videoCodeFinal}`}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}


export default Video
