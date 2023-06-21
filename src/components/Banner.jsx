import { Box ,Image} from '@chakra-ui/react'
import fire from "../assets/fire-fireball.gif"
import React from 'react'

const Banner = () => {
  return (
    <Box 
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    margin={"20px"}
    minH={"50vh"}
    marginTop={"7rem"}
    fontSize={"8rem"}
    // fontFamily={"Jolly Lodger"}
    fontFamily={'VT323'}
    backgroundColor={"whiteAlpha.500"}
    overflow={"hidden"}
    flexDir={"column"}
    className='welcome'
    >
        WELCOME
        <Box
        className='Banner-txt'
        fontSize={"0.3em"}
        // fontFamily={"Jolly Lodger"}  
        fontFamily={'VT323'}
        >Welcome back to your childhood. Enjoy the richness of the Retro Games Like never Before</Box>
        <Box display={"flex"}>
            <Image w={"3rem"} ml={"1rem"} mr={"1rem"} src={fire}></Image>
            <Image w={"3rem"} ml={"1rem"} mr={"1rem"} src={fire}></Image>
            <Image w={"3rem"} ml={"1rem"} mr={"1rem"} src={fire}></Image>
            <Image w={"3rem"} ml={"1rem"} mr={"1rem"} src={fire}></Image>
            
        </Box>
    </Box>
  )
}

export default Banner