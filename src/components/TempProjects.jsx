import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faGripLinesVertical, faArrowDown, faArrowRight, faCircleChevronRight, faArrowUpRightFromSquare, faCopyright);

function TempProjects({ dataCard }) {
  return (
    <>
      {dataCard.map((card, index) => (
        <div key={index} className='flex flex-col gap-6 mb-5 xl:flex xl:gap-[160px]'>
          <div className='sm:flex sm:flex-row-reverse'> {/* Tambahkan kelas sm:flex-row-reverse */}
            <img src={card.image} alt='Logo' className='flex items-center justify-center col-span-2 p-4 aspect-square bg-neutral-100 rounded-2xl w-full sm:w-32 2xl:hidden sm:ml-auto' />
            <div>
              <div className='flex text-[15px] text-gray-500 mt-4'>
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
                <p className='text-[14px] text-gray-500'>·</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TempProjects;
