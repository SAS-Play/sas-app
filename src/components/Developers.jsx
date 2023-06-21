import React, { useState } from 'react'
import backimg from "../assets/dev bg.png"
import { Box } from '@chakra-ui/react'
import sutanu from "../assets/Cards/Sutanu.png"
import soumik from "../assets/Cards/Soumik.png"
import anirban from "../assets/Cards/Anirban.png"
import FrontCards from './FrontCards'


const Developers = () => {
    return (
        <Box display={"flex"} flexDirection={"column"} backgroundImage={backimg} justifyContent={"center"} alignItems={"center"}>
            <Box mt={"2vw"} fontSize={"4vw"} fontFamily={'Tilt Prism'}>Meet The Devs</Box>
        <Box
            display={"flex"}
            id='devs'
            flexWrap={"wrap"}
            justifyContent={"space-around"}
            justifyItems={"center"}
            alignItems={"center"}
            
            // mt={"3vw"}
            flexDir={{ base: "column", md: "row", sm:"column" }}
            >
            <Box mr={{md:"2vw"}}>

            <FrontCards images={sutanu} name="Sutanu Maity" sub="Designer | Developer" fb="https://www.facebook.com/mr.sutanumaity" insta="https://www.instagram.com/mr.sutanumaity" linkdin="https://www.linkedin.com/in/sutanu-maity-594934182" github="https:www.github.com/sutanumaity"  main_txt="Hello there, Sutanu this side, hope you'll enjoy our version of retro gaming, we tried our best to give you a different yet amazing experience and we are still trying our best to improve it. Give this a try and I hope you guys will find it amazing. Thank you"/>
            </Box>
            
            <FrontCards images={anirban} name="Anirban Jash" sub="Designer | Developer" fb="https://www.facebook.com/anirban.jash.543" insta="https://www.instagram.com/anirban.jash/" linkdin="https://www.linkedin.com/in/anirbanjash01/" github="https://github.com/anirbanjash" main_txt="Hello Boss.... Anirban this side,its time to bring out your inner child and take a trip  down the memory lane and experience a new flavour of old retro games using AI. We are still trying to improve as much as possible with great accuracy..hope you guys will enjoy this ...Thank You.."/>
            
            <Box ml={{md:"2vw"}}>
            <FrontCards images={soumik} name="Soumik Samanta" sub="Designer | Developer" fb="https://www.facebook.com/Soumik2017/" insta="https://www.instagram.com/_sou_mik/" linkdin="https://www.linkedin.com/in/soumiksamanta02/" github="https://github.com/showMiko" main_txt="Hello. Soumik This Side. Hope you Will Enjoy Our creation. We are still trying to improve this more and more and trying to make it much more efficient. But still. Give this a try and enjoy. Cheers and all the Best"/>
            </Box>

        </Box>
                </Box>
    )
}

export default Developers