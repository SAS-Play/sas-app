import { Box,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import FrontCards from './FrontCards';
import BackCards from './BackCards';
const MainCard = (props) => {
    const [showFront, setShowFront] = useState(true);

    const handleClick = () => {
      setShowFront(!showFront);
    };
  
    return (
      <div className="flip-card">
        <div className={`card ${showFront ? 'show-front' : 'show-back'}`}>
          {showFront ? <FrontCards handleClick={handleClick} /> : <BackCards handleClick={handleClick} />}
        </div>
      </div>
    );
}

export default MainCard