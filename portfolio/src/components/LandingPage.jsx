import './LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { Typewriter } from 'react-simple-typewriter'

function LandingPage() {

    const userLocation = { loc: "~/alx-askw/portfolio" }


    return (
        <div className='topContainer'>
            <div className='location'>
                ~/alx-askw/portfolio
            </div>
            <div className='typeWriterContainer'>
                <div className='typeWriter'>
                    <Typewriter
                        words={["Hello!", "Welcome!", "Привет!", "Добро пожаловать!"]}
                        loop={0}
                        cursor={true}
                        cursorBlinking={true}
                    />
                </div>
            </div>
            <div className='arrowDown' onClick={() => console.log('coming soon!')}>
                <FontAwesomeIcon className='faArrow' icon={faArrowDown} size='3x' />
            </div>
        </div>
    )
}

export default LandingPage
