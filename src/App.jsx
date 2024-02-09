import Logo from './assets/images/Rizal.png'
import Profile from './assets/images/dudung.jpg'
import  PHima from './assets/images/Logo_HIMA_TI.png'
import Dumbways from './assets/images/dumbways.png'
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
        <div>
            <a href="#" className='text-body1 font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 inline-flex items-center gap-1 duration-150 w-fit mt-2'>
                <p>More About Me</p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </a>
        </div>
        <h5 className='mt-[24px] text-[25px] font-medium mb-5'>Work Experiences</h5>
        <div className="space-y-1 shadow-md py-4 px-6 rounded-md border-t-2 border-t-neutral-900">
            <div className="flex items-center justify-between">
                <h3 className='text-[23px] font-medium'>Frontend Developer</h3>
                <p className='text-[15px] font-medium text-gray-500'>Aug 2023 - Present</p>
            </div>
            <div className="flex items-center mt-[10px]">
                <h3 className='text-[18px] font-medium'>Againts Street</h3>
                <FontAwesomeIcon className='mx-[10px] ' icon="fa-solid fa-grip-lines-vertical" />
                <p className='text-[14px] font-medium text-gray-500 mt-[2px]'>Part Time</p>
            </div>
            <div>
                <h5 className='text-[18px] font-medium mb-[3px]'>Responsibilities :</h5>
                <div className="flex gap-1 items-center">
                    <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" className='mb-[1.5px] text-[15px]'/> 
                    <p className=''>Create, debug, or maintain Accelego projects</p>
                </div>
                <div class="flex gap-1 items-center">
                    <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" className='mb-[1px] text-[15px]'/>
                    <p>Developing apps using ReactJs, Ant Design and Tailwindcss</p>
                </div>
                <div class="flex gap-1 items-center">
                    <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" className='mb-[50px] text-[15px]'/>
                    <p>Developed and maintained a project with a clean and optimized codebase and well-structured folder system to enhance website performance</p>
                </div>
                <div class="flex gap-1 items-center">
                    <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" className='mb-[26px] text-[15px]'/>
                    <p>Design and implementation of low-latency, high-availability, and performance applications</p>
                </div>
                <div class="flex gap-1 items-center">
                    <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" className='mb-[1.5px] text-[15px]'/>
                    <p>Create, develop, or do research on other features needed</p>
                </div>
            </div>
        </div>
        <div className='mt-4 '>
            <a href="#" className='flex gap-2 items-center font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                <p>View All Experiences</p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </a>
        </div>
        <h3 className='text-[18px] font-medium mt-9'>Selected Projets</h3>
        <div className='mt-14 flex gap-[150px]'>
         <div>
            <div className='flex text-[15px] text-gray-500'>
             <p>2023</p>
             <FontAwesomeIcon className='mx-[10px] mt-1' icon="fa-solid fa-grip-lines-vertical" />
             <div className='flex hover:border-b-[1.5px] hover:border-b-neutral-500 w-fit'>
                 <a href="https://rizalherlangga-b49s1-task9.netlify.app/testimonial" target="_blank" rel="noopener noreferrer"><p>My Project</p></a>
                 <FontAwesomeIcon className='mx-[10px] text-[12px]' icon="fa-solid fa-arrow-up-right-from-square"  />
             </div>
             </div>
                 <h3 className='text-[18px] font-medium mt-2'>Project WEB</h3>
                 <p className='mt-2 font-normal text-[16px]'>Website that I created to do a task</p>
             <div className='mt-2 flex gap-1'>
                <p className='text-[14px] text-gray-600'>Tech:</p>
                <p className='text-[14px] text-gray-500'>JavaScript, CSS, HTML</p>
            </div>
         </div>
         <img src={Dumbways} alt="Logo" className='w-[140px] self-end'/>
        </div>
        <div className='mt-14 flex gap-[150px]'>
         <div>
            <div className='flex text-[15px] text-gray-500'>
             <p>2022</p>
             <FontAwesomeIcon className='mx-[10px] mt-1' icon="fa-solid fa-grip-lines-vertical" />
             <div className='flex hover:border-b-[1.5px] hover:border-b-neutral-500 w-fit'>
                 <a href="https://himati-web.vercel.app/" target="_blank" rel="noopener noreferrer"><p>HIMATI</p></a>
                 <FontAwesomeIcon className='mx-[10px] text-[12px]' icon="fa-solid fa-arrow-up-right-from-square"  />
             </div>
             </div>
                 <h3 className='text-[18px] font-medium mt-2'>HIMATI WEB</h3>
                 <p className='mt-2 font-normal text-[16px]'>Website about faculty information</p>
             <div className='mt-2 flex gap-1'>
                <p className='text-[14px] text-gray-600'>Tech:</p>
                <p className='text-[14px] text-gray-500'>Next JS, Tailwind CSS</p>
            </div>
         </div>
         <img src={PHima} alt="Logo" className='w-[140px] self-end'/>
        </div>
        <div className='mt-4 '>
            <a href="#" className='flex gap-2 items-center font-medium hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                <p>View All Projects</p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </a>
        </div>
        <div className='border-b-[1.5px] mt-7 border-b-neutral-300 '></div>
            <div className='flex gap-2 mt-[38px] justify-center font-medium'>
                <div className='flex hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                    <a href="mailto:rizsut03@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                    <FontAwesomeIcon className='mx-[10px] text-[12px]' icon="fa-solid fa-arrow-up-right-from-square"  />
                </div>
                <div className='flex hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                    <a href="https://www.linkedin.com/in/fachrurizaltri-prasetyoheruherlangga/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <FontAwesomeIcon className='mx-[10px] text-[12px]' icon="fa-solid fa-arrow-up-right-from-square"  />
                </div>
                <div className='flex hover:border-b-[1.5px] hover:border-b-neutral-900 w-fit'>
                    <a href="https://github.com/rizalherlangga" target="_blank" rel="noopener noreferrer">Github</a>
                    <FontAwesomeIcon className='mx-[10px] text-[12px]' icon="fa-solid fa-arrow-up-right-from-square"  />
                </div>
            </div>
            <div className='flex justify-center mt-2  gap-1 text-gray-600'>
                <FontAwesomeIcon className='mt-[3px]' icon="fa-solid fa-copyright"  />
                <p>2024 Rizal Herlangga, All Rights Reserved</p>
            </div>
       </div>
    </>
  );
}

export default App;
