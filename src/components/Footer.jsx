import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowUpRightFromSquare, faCopyright)

function Footer () {
    return (
        <>
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
        </>
    )
}

export default Footer;