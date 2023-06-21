import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { List, ListItem, ListIcon } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import mariopage from "../assets/Mario Page.png"


import arcade from "../assets/Mario/MarioArcade.png"
import tv from "../assets/TvFrame2.png"
import mariogame from "../assets/Mario/super-mario-brothers-power-up 1.gif"

import MarioInsturction from './MarioInsturction'
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const MarioPage = () => {
    return (
        <Box display={"flex"} className='OverImage' overflowWrap={'image'} flexDir={"column"} mt={"10vw"} id='mariopage'>
            <Image src={mariopage} width={"97vw"}></Image>
            <Box maxH={"100%"} width={"80vw"} fontSize={"1.5vw"} fontFamily={"Calibri"} className='image-top-center' mt={"6vw"}>
                Mario Forever (also knows as Super Mario 3: Mario Forever) is a PC fan game based on one of the most
                popular Nintendo games, Super Mario Bros. The game has been developed by Softendo (Buziol Games
                untill 2009). The game reproduces classic styles of Super Mario Bros. with slightly different graphics and
                musics from non-Mario games. The game has become popular, reaching the highest position n Platformer
                Games n CNET Downloads, receiving more more than 10 million downloads If you remember the oldest of Mario games, you cannot just pass this title by! Super Mario 3 : Mario Forever is a free remake of the classic Super Mario Bros game, which should make you busy for long hours, even if you haven't played Mario 3 before. Impersonate the friendly plumber once more to guide him through 8 different worlds placed on maps of this platform game, through countless monsters and obstacles, to help him beat the evil dragon Koopa or Bowser and save the imprisoned Princess Peach - all while listening to pleasant, cheerful music.

                Super Mario 3 : Mario Forever is really a classic Mario remake. Once again you strap on your wrench and hardhat and guide the chubby plumber through many skillfully made levels. The diversity of the levels is very impressive. Game has also renewed graphics and much better scrolling in comparison to the original Mario. You will have to get through levels ranging from underwater caverns to levels filled with hot lava. Of course, there are also many novelties in the gameplay - an option to save your game, brand new enemies and bonuses are only a few of them! However, fans of the original old Mario don't have to fear - it is still the same game, only upgraded. Collecting coins, jumping into the pipes, hidden levels
            </Box>
            <Box maxH={"100%"}
                fontSize={"2.5vw"}
                fontFamily={"Jolly Lodger"} className='image-bottom'
                mt={"-30vw"}
                display={"flex"}
                justifyContent={"space-around"}
                w={"100vw"}
            >
                <Fade up>

                <Box display={"flex"} flexDir={"row"}>
                    <Box className='image-overlay-container'>
                        <Image src={arcade} className='image-frame' width={"70vw"}></Image>
                        <Box className='image-overlay'>
                        <Image mt={"-4.7vw"} src={mariogame} width={"27vw"}></Image>
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
                            <MarioInsturction />
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
                            Now the Controller is Set Up for you. You can now move left,right, jump, go into pipes, shoot by performing gestures as shown in the slides.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Note: You need to move back to the initial position i.e. stand erect for not moving.
                        </ListItem>
                        <Box fontSize={"5vw"} color={"yellow"}>Happy Gaming</Box>
                    </List>

                </Box>
            </Box>

        </Box>
    )
}

export default MarioPage;