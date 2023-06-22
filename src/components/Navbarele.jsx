import { Box ,Image} from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/Main Logo.png"


const Navbarele = () => {
  return (
    <Box
    className="navbar navbar-expand-lg navbar-dark shadow-5-strong"
    fontFamily={"Bungee Shade"}
    fontSize={"1.5rem"}
    fontWeight={"hairline"}
    zIndex={100}

    >
      <Box id='Home' className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <a><Image width={"10rem"} src={logo}></Image></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Box  className="collapse navbar-collapse" id="navbarSupportedContent">
          <Box  className="navbar-nav me-auto mb-2 mb-lg-0">
            <li style={{marginLeft:"5rem",marginRight:"2rem"}} className="nav-item">
              <a style={{color:"red"}} className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li style={{marginLeft:"5rem",marginRight:"2rem"}} className="nav-item">
              <a style={{color:"Yellow"}} className="nav-link active" aria-current="page" href="#about">About</a>
            </li>
            <li style={{marginLeft:"5rem",marginRight:"2rem"}} className="nav-item">
              <a style={{color:"orange"}} className="nav-link active" aria-current="page" href="#games">Games</a>
            </li>
            <li style={{marginLeft:"5rem",marginRight:"2rem"}} className="nav-item">
              <a style={{color:"cyan"}} className="nav-link active" aria-current="page" href="#devs">Devs</a>
            </li>
            <li style={{marginLeft:"5rem",marginRight:"2rem"}} className="nav-item">
              <a style={{color:"#00ff1f"}} className="nav-link active" target='_blank' aria-current="page" href="https://www.dropbox.com/scl/fo/lmilm2zpk3wj24c2mdv59/h?dl=0&rlkey=0nivjkcnadvf3phd74j8bnbqc">Download</a>
            </li>
            <li style={{marginLeft:"5rem",marginRight:"2rem"}} className="nav-item">
              <a style={{color:"beige"}} className="nav-link active" aria-current="page" href="#contact">Contact</a>
            </li>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbarele
