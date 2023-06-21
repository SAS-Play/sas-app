import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import loading from "../assets/Comp 1.gif"

const Loading = () => {
  return (
    <Box backgroundColor={"#0e0e0e"} w={"100vw"} height={"100vh"} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
       <Image src={loading}></Image> 
    </Box>
  )
}

export default Loading