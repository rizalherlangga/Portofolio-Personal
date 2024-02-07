import Logo from './assets/images/Rizal.png'
import Profile from './assets/images/dudung.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope, faGripLinesVertical, faArrowDown, faArrowRight)

function App() {
  return (
    <>
       <div className="max-w-xl mx-auto px-2 py-8">
       <nav>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className='w-[75px]'/>
                </div>
                <div className="flex items-center gap-[30px]">
                    <ul className='flex gap-[30px] font-medium cursor-pointer'>
                        <li className="inline-block text-body1 text-neutral-500 hover:text-neutral-900 duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-neutral-900 after:transition-width after:duration-300 hover:after:w-full ">About</li>
                        <li className="inline-block text-body1 text-neutral-500 hover:text-neutral-900 duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-neutral-900 after:transition-width after:duration-300 hover:after:w-full ">Project</li>
                        <li className="inline-block text-body1 text-neutral-500 hover:text-neutral-900 duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-neutral-900 after:transition-width after:duration-300 hover:after:w-full ">Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            <img src={Profile} alt="Profile" className='w-20 rounded-[50px] mt-10'/>
        </div>
        <div class="mt-[30px] text-[14px] leading-normal text-neutral-500 font-medium">
            <p>Hi, I am Rizal Herlangga, a Frontend Developer in Jakarta, Indonesia. I have been working as a Frontend Developer for more than a year. I build visually stunning and user-friendly web application experiences. I'm looking forward to collaborating with you!</p>
        </div>
        <div class="mt-[10px] flex text-neutral-900 font-normal text-[15px]">
            <div>
                <a href="mailto:rizsut03@gmail.com" target="_blank" className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit'>
                    <FontAwesomeIcon icon="fa-regular fa-envelope" />
                    <p>Email Me </p>
                </a>
            </div>
            <FontAwesomeIcon className='mx-[10px] mt-1' icon="fa-solid fa-grip-lines-vertical" />
            <div>
                <a href="https://drive.google.com/drive/folders/1TazPb1xC-b1dOxuMA_pU1W9vcFMKwPKG" target="_blank" className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit'>
                    <FontAwesomeIcon  icon="fa-solid fa-arrow-down" />
                    <p>Download CV</p>
                </a>
            </div>
        </div>
        <div class="moreabout">
            <a href="#" className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit mt-2'>
                <p>More About Me</p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </a>
        </div>
       </div>
    </>
  );
}

export default App;
