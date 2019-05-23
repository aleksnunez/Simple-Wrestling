import React from 'react'
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import styled from 'styled-components'

import safeMap from 'util/safeMap'

const StyledCarousel = styled(CarouselProvider)`
  width: 100%;
`

const Carousel = props => {
  const { images } = props
  const totalSlides = images ? images.length : 0
  const slide = (image, i) => (
    <Slide key={i} index={i}>
      <Image hasMasterSpinner={true} src={image} />
    </Slide>
  )

  return (
    <StyledCarousel
      naturalSlideWidth={2000}
      naturalSlideHeight={1125}
      isPlaying={true}
      totalSlides={totalSlides}
      visibleSlides={totalSlides < 3 ? totalSlides : totalSlides}>
      <Slider>
        {safeMap(images, slide)}
      </Slider>
    </StyledCarousel>
  )
}

export default Carousel
