import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import sfpage from "../assets/SF/SF_PAGE.png"


import arcade from "../assets/SF/arcade.png"
import tv from "../assets/TvFrame2.png"
import sfgif from "../assets/SF/gameplay2.gif"
import SfInstruction from './SfInstruction'

const StreetFighterPage = () => {
    return (
        <Box display={"flex"} className='OverImage' overflowWrap={'image'} flexDir={"column"} mt={"10vw"} id='sfpage'>
            <Image src={sfpage} width={"97vw"}></Image>
            <Box maxH={"100%"} width={"80vw"} fontSize={"1.5vw"} fontFamily={"Calibri"} className='image-top-center' mt={"6vw"}>
            Street Fighter II was released in 1991 following an unsuccessful attempt to brand the 1989 beat 'em up game Final Fight as the Street Fighter sequel. It is one of the earliest arcade games for Capcom's CP System hardware and was designed by Akira Nishitani and Akira Yasuda, who also made Final Fight and Forgotten Worlds.

            Street Fighter II: The World Warrior is the first one-on-one fighting game to give players a choice from a variety of player characters with different moves, allowing for more varied matches. Each player character has a unique fighting style with approximately 30 or more moves, including new grappling moves and throws, and two or three special attacks. In the single-player mode, the player character is pitted sequentially against the seven other main characters before confronting the final four bosses, exclusively CPU-controlled. As in the original, a second player can join anytime for competitive matches.
            </Box>
            <Box maxH={"100%"}
                fontSize={"2.5vw"}
                fontFamily={"Jolly Lodger"} className='image-bottom'
                mt={"-30vw"}
                display={"flex"}
                justifyContent={"space-around"}
                w={"100vw"}
            >
                <Box display={"flex"} flexDir={"row"}>
                    <Box className='image-overlay-container'>


                        <Image src={arcade} className='image-frame' width={"70vw"}></Image>
                        <Box className='image-overlay'>
                        <Image mt={"9vw"} src={sfgif} width={"65vw"}></Image>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box maxH={"100%"}
                fontSize={"2.5vw"}
                fontFamily={"Jolly Lodger"} className='image-bottom-center'
                mt={"20vw"}
                display={"flex"}
                justifyContent={"space-around"}
                w={"100vw"}
                ml={"-10vw"}
            >
                <Box display={"flex"} flexDir={"row"}>

                    <Box maxWidth={"100vw"} className='image-overlay-container'>
                        <Image ml={"20vw"} src={tv} className='image-frame' width={"25vw"}></Image>
                        <Box className='image-overlay' width={"23vw"} mt={"-1vw"} ml={"10vw"}>
                        <SfInstruction/>
                        </Box>
                    </Box>
                </Box>

                <Box display={"flex"} flexDir={"column"}>
                    <Box fontSize={"5vw"}>How To Play ?</Box>
                    <List spacing={0.5} fontSize={"2vw"} maxWidth={"40vw"}>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Start By standing in Erect Position.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Join hands as shown in the 2nd slide.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Bring your hand down to the Original Position.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Now the Controller is Set Up for you. You can now move left,right, jump, crouch, kick, punch by making gestures as shown in the frames. 
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Note: To Crouch Just bend down a bit. It is not shown in these slides. If u still need reference, please refer to the Mario Game and learn the gesture.
                        </ListItem>
                        <Box fontSize={"5vw"} color={"blue"}>Happy Gaming</Box>
                    </List>

                </Box>
            </Box>

        </Box>
    )
}

export default StreetFighterPage