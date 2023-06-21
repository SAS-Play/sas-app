import { Image } from '@chakra-ui/react'
import React from 'react'

import step1 from "../assets/Mario Instructions/Step 1.png"
import step2 from "../assets/Mario Instructions/Step 2.png"
import step3 from "../assets/Mario Instructions/Step 3.png"
import step4 from "../assets/Mario Instructions/Step 4.png"
import step5 from "../assets/Mario Instructions/Step 5.png"
import step6 from "../assets/Mario Instructions/Step 6.png"
import step7 from "../assets/Mario Instructions/Step 7.png"
import step8 from "../assets/Mario Instructions/Step 8.png"
import step9 from "../assets/Mario Instructions/Step 9.png"
import step10 from "../assets/Mario Instructions/Step 10.png"
import step11 from "../assets/Mario Instructions/Step 11.png"

const MarioInsturction = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <Image src={step1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step6} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <Image src={step7} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step8} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step9} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step10} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <Image src={step11} class="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default MarioInsturction