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

function Card({ CardData }) {
    return (
        <>
            {CardData.map((card, index) => (
                <div key={index} className="space-y-1 shadow-md py-4 px-6 rounded-md border-t-2 border-t-neutral-900 mb-[25px]">
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                        <h3 className='text-[23px] font-medium'>{card.job}</h3>
                        <p className='text-[15px] font-medium text-gray-500'>{card.date}</p>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <h3 className='text-[18px] font-medium'>{card.tittle}</h3>
                        <FontAwesomeIcon className='mx-[10px] ' icon={faGripLinesVertical} />
                        <p className='text-[14px] font-medium text-gray-500 mt-[2px]'>{card.jobContract}</p>
                    </div>
                    <div>
                        <h5 className='text-[18px] font-medium mb-[3px]'>Responsibilities :</h5>
                        {card.res.map((responsibility, resIndex) => (
                            <div key={resIndex} className="flex items-start gap-3 sm:gap-2 text-body2 pl-[5px]">
                                <FontAwesomeIcon icon={faCircleChevronRight} className=' text-[13px] mt-[4px]' />
                                <p className=''>{responsibility}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;