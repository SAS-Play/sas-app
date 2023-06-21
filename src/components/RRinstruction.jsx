import { Image } from '@chakra-ui/react'
import React from 'react'

import state1 from "../assets/RoadRash Instructions/1.png"
import state2 from "../assets/RoadRash Instructions/2.png"
import state3 from "../assets/RoadRash Instructions/3.png"
import leftpunch from "../assets/RoadRash Instructions/LEFT PUNCH.png"
import rightpunch from "../assets/RoadRash Instructions/RIGHT PUNCH.png"
import rightturn from "../assets/RoadRash Instructions/RIGHT TURN.png"
import leftturn from "../assets/RoadRash Instructions/LEFT TURN.png"
import kick from "../assets/RoadRash Instructions/KICK.png"

const RRinstruction = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <Image src={state1} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <Image src={state2} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <Image src={state3} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <Image src={leftpunch} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <Image src={rightpunch} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <Image src={kick} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <Image src={leftturn} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <Image src={rightturn} class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
  )
}

export default RRinstruction