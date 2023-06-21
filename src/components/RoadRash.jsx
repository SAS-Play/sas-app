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

import rrpage from "../assets/RRPage3.png"
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';


import arcade from "../assets/Road Rash Carousels/Daco_4635355.png"
import tv from "../assets/TvFrame2.png"
import rrgif from "../assets/Road Rash Carousels/GrimColossalGroundbeetle-max-1mb.gif"

import RRinstruction from './RRinstruction'

const RoadRash = () => {
    return (
        <Box display={"flex"} className='OverImage' overflowWrap={'image'} flexDir={"column"} id='rrpage'>
            <Image src={rrpage} width={"97vw"}></Image>
            <Box maxH={"100%"} width={"80vw"} fontSize={"2vw"} fontFamily={"Calibri"} className='image-top-center' mt={"30vw"}>
                Road Rash is a motorcycle racing video game series by Electronic Arts in which the player participates in violent, illegal street races. The series started on the Sega Genesis/Mega Drive and was released on various other systems over the years. The game's title is based on the slang term for the severe friction burns that can occur in a motorcycle fall where skin comes into contact with the ground at high speed.
                <br />
                It was one of the Best game to play at the times.
                Now, What are we adding to the table?

                So Basically we have setup the gesture Controller for this Game. You can do somewhat Similar Movements while riding a bike and Play this game.

                Confused? No Worries. We have the instructions Lined Up for you with a Quick Demo.

                Before that have a look at these pictures in case you haven't played Road Rash ever.
            </Box>
            <Box maxH={"100%"}
                fontSize={"2.5vw"}
                fontFamily={"Jolly Lodger"} className='image-bottom'
                mt={"-20vw"}
                display={"flex"}
                justifyContent={"space-around"}
                w={"100vw"}
            >
                <Fade left>

                <Box display={"flex"} flexDir={"row"}>
                    <Box className='image-overlay-container'>
                        <Image src={arcade} className='image-frame' width={"65vw"}></Image>
                        <Box className='image-overlay'>
                        <Image src={rrgif} className='image-frame' width={"65vw"}></Image>
                        </Box>
                    </Box>
                </Box>
                </Fade>
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
                <Fade left>

                <Box display={"flex"} flexDir={"row"}>
                    <Box maxWidth={"100vw"} className='image-overlay-container'>


                        <Image ml={"20vw"} src={tv} className='image-frame' width={"25vw"}></Image>
                        <Box className='image-overlay' width={"23vw"} mt={"-1vw"} ml={"10vw"}>
                            <RRinstruction />
                        </Box>
                    </Box>
                </Box>
                </Fade>

                <Box display={"flex"} flexDir={"column"}>
                    <Tada forever>
                    <Box fontSize={"5vw"}>How To Play ?</Box>
                    </Tada>
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
                           Now the Controller is Set Up for you. You can now acclerate, Right Punch, Left Punch, Kick, Turn Right, Turn Left by performing gestures as shown in the slides.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                           Note: You need to move back to the initial position i.e. stand erect for applying the Brakes.
                        </ListItem>

                    <Box fontSize={"5vw"} color={"red"}>Happy Gaming</Box>
                    </List>

                </Box>
            </Box>

        </Box>
    )
}

export default RoadRash