import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from '../assets/images/dudung.jpg';
import Card from '../components/Card';
import DataExper from '../lib/DataExper';
import TempProjects from "../components/TempProjects";
import projectData from "../lib/projectData";
import AnimatedText from "../components/AnimatedText";
import DataAnimatedText from "../lib/DataAnimatedText";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope, faGripLinesVertical, faArrowDown, faArrowRight, faCircleChevronRight, faArrowUpRightFromSquare, faCopyright)

function Home () {
  
  const selectedData = projectData.slice(0,1);
  const selectedExpre = DataExper.slice(0,1);
  console.log();
    return (
        <>
           <div className="mx-auto max-w-[576px] px-7 py-2 ">
             <Navbar />
             <div>
               <img src={Profile} alt="Profile" className='w-[120px] rounded-[70px] mt-10'/>         
             </div>
             <div className="mt-[15px]">
               <AnimatedText texts={DataAnimatedText} />
             </div>
             <div className="mt-[15px] text-[14px] leading-normal text-neutral-500 font-medium">
               <p>Hi, I'm Rizal Herlangga, FullStack Developer in Jakarta, Indonesia. I am someone who is very interested in this field and excited to start my career in the industry. Although I am a recent graduate, I have a strong foundation in skills and a determination to learn and contribute. I am excited to apply my knowledge and grow professionally, and I look forward to the opportunity to collaborate with you and contribute to your team's success!</p>
             </div>
             <div className="mt-[10px] flex text-neutral-900 font-normal text-[15px]">
               <div>
                 <a href="mailto:rizsut03@gmail.com" target="_blank" rel="noreferrer" className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit'>
                     <FontAwesomeIcon icon="fa-regular fa-envelope" />
                     <p>Email Me </p>
                 </a>
               </div>
               <FontAwesomeIcon className='mx-[10px] mt-1' icon="fa-solid fa-grip-lines-vertical" />
               <div>
                 <a href="https://drive.google.com/drive/folders/1TazPb1xC-b1dOxuMA_pU1W9vcFMKwPKG" target="_blank" rel="noreferrer" className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit'>
                     <FontAwesomeIcon  icon="fa-solid fa-arrow-down" />
                     <p>Download CV</p>
                 </a>
               </div>
             </div>
             <div>
               <Link to='/about' className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit mt-2'>
                  <p>More About Me</p>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
               </Link>
             </div>
             <h5 className='mt-[24px] text-[25px] font-medium mb-5'>Work Experiences</h5>
             <Card CardData = {selectedExpre}/>
             <div className='mt-4 '>
              <Link to='/experiences' className='flex gap-2 items-center font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                  <p>View All Experiences</p>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </Link>
             </div>
             <h3 className='text-[18px] font-medium mt-9 mb-4'>Selected Projets</h3>
             <TempProjects dataCard={selectedData} />
             <div className='mt-4 '>
              <Link to='/projects' className='flex gap-2 items-center font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                  <p>View All Projects</p>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </Link>
             </div>
             <Footer />
           </div>
        </>   
    )
}

export default Home;