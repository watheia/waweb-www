/** @format */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import "react-lazy-load-image-component/src/effects/opacity.css"
import "leaflet/dist/leaflet.css"
import "./index.css"

import "swiper/swiper.min.css"
import "aos/dist/aos.css"

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="https://cdn.watheia.org/assets/favicon.ico" />
        <meta name="theme-color" content="#092947" />
        <meta
          name="description"
          content="Watheia Labs LLC is a modern engineering and digital design agency offering consulting services in the Greater Northwest.."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.watheia.org/assets/wa-card.png" />
        <meta property="og:title" content="Micro Frontends | by Watheia Labs." />
        <meta
          property="og:description"
          content="Watheia Labs LLC is a modern engineering and digital design agency offering consulting services in the Greater Northwest."
        />
        <meta property="og:url" content="https://watheia.app/" />
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      {props.children}
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
