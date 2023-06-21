import { Box,Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Divider } from '@chakra-ui/react'
import fb from "../assets/icons/fb.png"
import github from "../assets/icons/github.png"
import insta from "../assets/icons/insta.png"
import linkedin from "../assets/icons/linkedin.png"
const FrontCards = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className='card-container' onClick={props.handleClick} onMouseEnter={handleHover}
    onMouseLeave={handleHover}>

    <Box className={`image-overlay-container ${isHovered ? 'hovered' : ''}`}
        width={{ base: '50vw', md: '30vw' }} margin={"auto"}>
        <Image src={props.images} className='image-frame'/>
        <Box className='image-overlay' mt={{base:"13vw",md:"8.5vw"}} width={"100%"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
                <Text fontFamily={"calibri"} fontSize={{base:"5vw",md:"3vw"}} mb={{base:"5.5vw",md:"1vw"}}>{props.name}</Text>
                <Divider width={"80%"} mt={{base:"-5vw",md:"-1vw"}}/>
                <Text fontFamily={"calibri"} mt={{base:"-2vw",md:"-1vw"}} fontSize={{base:"3vw",md:"2vw"}}>{props.sub}</Text>
                <Text fontFamily={"Lobster"} mt={{base:"-1vw",md:"1vw"}} width={"80%"} fontSize={{base:"2vw",md:"1.5vw"}}>{props.main_txt}</Text>
            </Box>
        </Box>
        <Box display={"flex"} flexDir={"row"} mt={{base:"35vw",md:"23vw"}} width={"70%"} className='image-overlay ' justifyContent={"space-between"}>
                    <a href={props.fb} target='_blank'><Image width={"3vw"} src={fb}></Image></a>
                    <a href={props.github} target='_blank'><Image width={"3vw"} src={github}></Image></a>
                    <a href={props.insta} target='_blank'><Image width={"3vw"} src={insta}></Image></a>
                    <a href={props.linkdin} target='_blank'><Image width={"3vw"} src={linkedin}></Image></a>
        </Box>
    </Box>
    </div>
  )
}

export default FrontCards