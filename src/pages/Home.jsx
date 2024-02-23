import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from '../assets/images/dudung.jpg'
import Card from '../components/Card'
import CardProject from "../components/CardProject";
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
    return (
        <>
           <div className="max-w-xl mx-auto px-2 py-8">
             <Navbar />
             <div>
               <img src={Profile} alt="Profile" className='w-20 rounded-[50px] mt-10'/>         
             </div>
             <div className="mt-[30px] text-[14px] leading-normal text-neutral-500 font-medium">
               <p>Hi, I am Rizal Herlangga, a Frontend Developer in Jakarta, Indonesia. I have been working as a Frontend Developer for more than a year. I build visually stunning and user-friendly web application experiences. I'm looking forward to collaborating with you!</p>
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
               <a href="#" rel="noreferrer" className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit mt-2'>
                  <p>More About Me</p>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
               </a>
             </div>
             <h5 className='mt-[24px] text-[25px] font-medium mb-5'>Work Experiences</h5>
             <Card />
             <div className='mt-4 '>
              <a href="#" className='flex gap-2 items-center font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                  <p>View All Experiences</p>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </a>
             </div>
             <h3 className='text-[18px] font-medium mt-9'>Selected Projets</h3>
             <CardProject />
             <div className='mt-4 '>
              <a href="#" className='flex gap-2 items-center font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                  <p>View All Projects</p>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </a>
             </div>
             <Footer />
           </div>
        </>   
    )
}

export default Home;