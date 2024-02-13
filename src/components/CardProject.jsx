import Dumbways from '../assets/images/dumbways.png'
import PHima from '../assets/images/Logo_HIMA_TI.png'
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

function CardProject () {
    const dataCard = [
        {
          year: "2023",
          project: "My Project",
          title: "Project Web",
          desc: "Website that I created to do a task",
          tech: "JavaScript, CSS, HTML",
          image: Dumbways,
          projectLink: "https://rizalherlangga-b49s1-task9.netlify.app/testimonial"
        },
        {
          year: "2022",
          project: "HIMATI",
          title: "HIMATI Web",
          desc: "Website about faculty information",
          tech: "Next JS, Tailwind CSS",
          image: PHima,
          projectLink: "https://himati-web.vercel.app/"
        }
      ]
    return (
      <>
        {dataCard.map((card, index) => (
        <div key={index} className='mt-14 flex gap-[150px]'>
          <div>
            <div className='flex text-[15px] text-gray-500'>
              <p>{card.year}</p>
              <FontAwesomeIcon className='mx-[10px] mt-1' icon='grip-lines-vertical' />
              <div className='flex hover:border-b-[1.5px] hover:border-b-neutral-500 w-fit'>
                <a href={card.projectLink} target='_blank' rel='noopener noreferrer'>
                  <p>{card.project}</p>
                </a>
                <FontAwesomeIcon className='mx-[10px] text-[12px]' icon='arrow-up-right-from-square' />
              </div>
            </div>
            <h3 className='text-[18px] font-medium mt-2'>{card.title}</h3>
            <p className='mt-2 font-normal text-[16px]'>{card.desc}</p>
            <div className='mt-2 flex gap-1'>
              <p className='text-[14px] text-gray-600'>Tech:</p>
              <p className='text-[14px] text-gray-500'>{card.tech}</p>
            </div>
          </div>
          <img src={card.image} alt='Logo' className='w-[140px] self-end' />
        </div>
      ))}
        {/* <div className='mt-14 flex gap-[150px]'>
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
         <img src={PHima} alt="Logo" className='w-[140px] self-end'/>
        </div> */}
      </>
       
    )
}

export default CardProject;