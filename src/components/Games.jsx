import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import page from "../assets/Games Page.png"
import rr from "../assets/9b80a2d6-7bf6-4a62-8057-9d298d4a15de.png"
import sf from "../assets/Street_Fighter_old_logo.png"
import mario from "../assets/mario-bros-huge-batch-official-art-for-mario-party-star-rush-mario-party-legacy-27.png"
import hotd from "../assets/dfe1f3e3-ee1e-46ca-ad21-99766e62a6a6.png"
import Fade from 'react-reveal/Fade';

const Games = () => {
  return (
    <Fade right>

    <Box display={"flex"} className='OverImage' overflowWrap={'image'} mt={"5vw"} id='games'>
            <Image src={page} width={"97vw"}></Image>
            <Box maxH={"100%"} fontSize={"1.5vw"} fontFamily={"Jolly Lodger"} className='image-center' top={"20vw"}>
            So, as of now We are offering you 4 games to try out and experience how this enhances your game play. We are Trying to improve these as much as possible and we will also try to add new games as well to this list in the future.</Box>
            <Box display={"flex"} justifyItems={"center"} className='image-center' alignItems={"center"} mt={10}>
            <a href='#rrpage'>
            <Image src={rr} mr={"2vw"} width={"10vw"}></Image>
            </a>
            <a href='#sfpage'>
            <Image src={sf} width={"10vw"}></Image>
            </a>
            <a href='#mariopage'>
            <Image src={mario} width={"10vw"}></Image>
            </a>
            <a href='#hotdpage'>
            <Image src={hotd} width={"10vw"}></Image>
            </a>
            </Box>
        </Box>
    </Fade>
  )
}

export default Games