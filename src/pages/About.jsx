import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Profile from '../assets/images/dudung.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowDown)

function About () {
    return(
        <>
        <div className="max-w-xl mx-auto px-7 py-2 ">
          <Navbar />
          <div>
            <img src={Profile} alt="Profile" className='w-28 rounded-[85px] mt-10'/>         
          </div>
          <h1 className='mt-[24px] text-[25px] font-medium mb-5'>About</h1>
          <div className="mt-[30px] text-[14px] leading-normal text-neutral-500 font-medium mb-[15px]">
            <p>I am a Frontend Developer with 2 years of professional experience. I am dedicated to creating high-quality websites that are user-friendly and visually pleasing. My attention to detail and passion for creating visually stunning designs ensures that every project I work on is of the highest standard.</p>
            <br />
            <p>I am also a Full Stack Developer, but my main focus is on Frontend Development. I strive to make every website I build easy to navigate and visually appealing, ensuring that users have the best possible experience. I am constantly learning and staying up-to-date with the latest technologies, to ensure that my clients receive the best possible service.</p>
          </div>
          <div>
            <a href="https://drive.google.com/drive/folders/1TazPb1xC-b1dOxuMA_pU1W9vcFMKwPKG" target="_blank" rel="noreferrer" className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit'>
              <FontAwesomeIcon  icon="fa-solid fa-arrow-down" />
              <p>Download CV</p>
            </a>
          </div>
          <Footer />
        </div>
        </>
    )
}

export default About;