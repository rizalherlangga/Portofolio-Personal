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

function Card () {
    return(
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
    )
}

export default Card;