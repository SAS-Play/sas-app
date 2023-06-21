import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { List, ListItem, ListIcon } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import HOTDpage from "../assets/HOTD PAGE.png"


import arcade from "../assets/HOTD/arcade.png"
import tv from "../assets/TvFrame2.png"
import hotdgame from "../assets/HOTD/gameplay.gif"
import Shake from 'react-reveal/Shake';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

import control from"../assets/HOTD/control.png" 

const HOTDPage = () => {
    return (
        <Box display={"flex"} className='OverImage' overflowWrap={'image'} flexDir={"column"} mt={"10vw"} id='hotdpage'>
            <Image src={HOTDpage} width={"97vw"}></Image>
            <Box maxH={"100%"} width={"80vw"} fontSize={"1.5vw"} fontFamily={"Calibri"} className='image-top-center' mt={"6vw"}>
            The House of the Dead is a horror-themed light gun shooter video game franchise created by Sega in 1996. Originally released in arcades, it utilizes a light gun on the platform, but can be played with standard controllers on consoles and a mouse or keyboard on home computers
            The core gameplay mechanic of games in The House of the Dead series is the on-rails shooting. The player must clear each area of enemies before advancing to the next area. The first two installments featured pistols, the third featured a shotgun, the fourth and Scarlet Dawn featured a submachine gun. Overkill features different firearms which can be changed to the players' liking. The instructions on the cabinets note that a head shot is the most effective way to kill zombies.
            Successful clearing will result in boss battles. Before most battles, the game will show what the bosses' weak point is. Final bosses have no identifiable weak point. If the boss is shot enough times, it will recoil; otherwise, it will take one of the player's lives. In most of the games, the bosses are named after Major Arcana cards. They are also classified by 'types', which are shown as either a number or (more rarely) a Greek letter.
            There are also some different branching paths in the games, that are usually accessed by shooting a door or an object and sometimes when a civilian is killed.
            The first two The House of the Dead games featured civilians. If the player successfully rescued civilians from the zombies, the civilian would sometimes reward the player with an extra life. The fourth did not feature civilians. In the third game, occasionally the player's partner would get in trouble and the player would be rewarded if he or she saved the partner's life. Players can also obtain extra lives by shooting boxes, crates, vases and destructible scenery. Scarlet Dawn once again features the civilians from the first two games, alongside the partner rescue mechanics from the third game, alongside new mechanics such as weapon switching and quick time events.
            All mainline games have multiple endings, depending on how well the player did in terms of civilians rescued, shooting percentage, score, and lives left. Every main game except the last one has a "bad" ending, usually involving one of the characters transforming into a zombie. In the first game, the character turning was Sophie Richards. 2 is Goldman, III is Daniel Curien and 4 is, once again, Goldman.
            </Box>
            <Box maxH={"100%"}
                fontSize={"2.5vw"}
                fontFamily={"Jolly Lodger"} className='image-bottom'
                mt={"-30vw"}
                display={"flex"}
                justifyContent={"space-around"}
                w={"100vw"}
            >
                <Fade right>
                <Box display={"flex"} flexDir={"row"}>
                    <Box className='image-overlay-container'>
                        <Image src={arcade} className='image-frame' width={"70vw"}></Image>
                        <Box className='image-overlay'>
                        <Image mt={"-4.7vw"} src={hotdgame} width={"24vw"}></Image>
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
                <Box display={"flex"} flexDir={"row"}>
                    <Fade left>

                    <Box maxWidth={"100vw"} className='image-overlay-container'>
                        <Image ml={"20vw"} src={tv} className='image-frame' width={"25vw"}></Image>
                        <Box className='image-overlay' width={"23vw"} mt={"-1vw"} ml={"10vw"}>
                            <Image src={control}></Image>
                        </Box>
                    </Box>
                    </Fade>
                </Box>

                <Box display={"flex"} flexDir={"column"}>
                    <Tada forever>
                    <Box fontSize={"5vw"}>How To Play ?</Box>
                    </Tada>
                    <List spacing={0.5} fontSize={"2vw"} maxWidth={"40vw"}>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            There are 2 simple Movements 
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            Move you wrist to move the cursor on screen.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            If your plam is open it means holding the fire.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            If you close your fist it will shoot.
                        </ListItem>
                        <Box fontSize={"5vw"} color={"green"}>Happy Gaming</Box>
                    </List>

                </Box>
            </Box>

        </Box>
    )
}

export default HOTDPage;
