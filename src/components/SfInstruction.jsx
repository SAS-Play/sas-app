import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from '@chakra-ui/react'


import step1 from "../assets/SF/STEP 1 FREE STATE.png"
import step2 from "../assets/SF/STEP 2 READY STATE.png"
import step3 from "../assets/SF/LEFT MOVEMENT.png"
import step4 from "../assets/SF/RIGHT MOVEMENT.png"
import step5 from "../assets/SF/LEFT PUNCH.png"
import step6 from "../assets/SF/RIGHT PUNCH.png"
import step7 from "../assets/SF/LEFT KICK.png"
import step8 from "../assets/SF/RIGHT KICK.png"
import step9 from "../assets/SF/JUMP.png"

const SfInstruction = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={step1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <Image
          className="d-block w-100"
          src={step2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <Image
        className="d-block w-100"
        src={step3}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
    <Image
      className="d-block w-100"
      src={step4}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <Image
    className="d-block w-100"
    src={step5}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
<Image
  className="d-block w-100"
  src={step6}
  alt="First slide"
/>
</Carousel.Item>
<Carousel.Item>
<Image
  className="d-block w-100"
  src={step7}
  alt="First slide"
/>
</Carousel.Item>
<Carousel.Item>
<Image
  className="d-block w-100"
  src={step8}
  alt="First slide"
/>
</Carousel.Item>
<Carousel.Item>
<Image
  className="d-block w-100"
  src={step9}
  alt="First slide"
/>
</Carousel.Item>
      </Carousel>
    )
}

export default SfInstruction
