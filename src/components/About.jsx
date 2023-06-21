import React from 'react'
import page from "../assets/About Page.png"
import { Box, Image } from '@chakra-ui/react'



const About = () => {
    return (

            <Box display={"flex"} className='OverImage' overflowWrap={'image'} id='about'>
                <Image src={page} width={"97vw"}></Image>
                <Box maxH={"100%"} fontSize={"1.5vw"} fontFamily={"Jolly Lodger"} className='image-center' mt={"5vw"}>
                    Do you remember the games you used to play as a child? Well we hope you do. We are here to present to you your childhood memories as an advanced package. We are offering you the flavors of the good old retros with the new and enhanced AI Gesture Controllers. Yes, Now you can play games like Mario, Street Fighter, House of the Dead and Road Rash with your body movements. Say Good bye to the keyboards and mouse and the arcade controllers.
                    So You might be thinking that how is it different from the already existing technologies offered by various Companies to play games without an actual controller? Well we offer the experience at No Added cost. You dont need expensive hardware to enjoy our setup. Just a webcam or your mobile camera attached to your PC setup should be good enough. So Worth the shot right???  Welcome to the.......</Box>
                <Box maxH={"100%"}
                    fontSize={"2.5vw"}
                    fontFamily={"Jolly Lodger"} className='image-bottom'
                    mt={"11vw"}>
                    NEW WAY OF PLAYING THE OLD
                </Box>

            </Box>    )
}

export default About