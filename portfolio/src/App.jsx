
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react'


import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import CV from './components/CV';

function App() {

  const backgroundImageVariations = {
    backgroundThree: {
      // image: document.body.style.backgroundImage = "url(../public/test13.jpg)",
      author: "Jack B",
      imageName: "photography of white boats beside bridge during nighttime",
      link: "https://unsplash.com/photos/photography-of-white-boats-beside-bridge-during-nighttime-AdN1QHKJCck"
    }
  }
  document.body.style.backgroundImage = "url(../public/test13.jpg)"
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  const paraRef = useRef();
  return (
    <>
      <div className='containerDiv'>
        <Parallax className='para' pages={4} ref={paraRef} style={{}}>
          <ParallaxLayer offset={0} speed={1} style={{}}>
            <LandingPage></LandingPage>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1} style={{}}>
            <AboutMe></AboutMe>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1} style={{}}>
            <Projects />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1} style={{}}>
            <CV></CV>
          </ParallaxLayer>
        </Parallax>
        <p className='creditInfo'>&copy; Site creation: Alx Askw | Photo credit: {backgroundImageVariations.backgroundThree.author}</p>

      </div>

    </>
  );
}

export default App
