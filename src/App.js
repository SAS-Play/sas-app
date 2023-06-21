import { Box } from "@chakra-ui/react";
import Navbarele from "./components/Navbarele";
import backimg from "./assets/Backimg.png"
import Banner from "./components/Banner";
import About from "./components/About";
import Games from "./components/Games";
import RoadRash from "./components/RoadRash";
import MarioPage from "./components/MarioPage";
import HOTDPage from "./components/HOTDPage";
import blueimg from "../src/assets/blur.png"
import { useEffect, useState } from "react";
import StreetFighterPage from "./components/StreetFighterPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Developers from "./components/Developers";
import Loading from "./components/Loading";
import Contact from "./components/Contact";
import Footer from "./components/footer";


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundImage = scrollPosition > 800 ? `url(${blueimg})` : `url(${backimg})`;
  return (
    <Box
    backgroundImage={backgroundImage}
    backgroundRepeat={"no-repeat"}
    backgroundSize={"cover"}
    w={"100vw"}
    minH={"100vh"}
    backgroundAttachment={"fixed"}
    className="App">

      {
        loading?
        <Loading/>
        :
        <div>

      <Navbarele/> 
      <Banner/>
      <Box
      display={"flex"}
      marginLeft={"2rem"}
      marginRight={"2rem"}
      mt={"20vw"}
      flexDir={"column"}
      >
        <About/>
        <Games/>
        <RoadRash/>
        <MarioPage/>
        <HOTDPage/>
        <StreetFighterPage/>
      </Box>
      <Developers/>
      <Contact/>
      <Footer/>
     
        </div>
    }
    </Box>
  );
}

export default App;
