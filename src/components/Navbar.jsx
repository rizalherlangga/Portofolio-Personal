import Logo from '../assets/images/Rizal.png'

import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <nav className='mb-10'>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                 <Link to = "/">
                    <img src={Logo} alt="Logo" className='w-[75px]'/>
                 </Link>
                </div>
                <div className="flex items-center gap-[30px]">
                    <ul className='flex gap-[30px] font-medium cursor-pointer'>
                        <li className="inline-block text-body1 text-neutral-500 hover:text-neutral-900 duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-neutral-900 after:transition-width after:duration-300 hover:after:w-full "> <Link to = "/about">About</Link></li>
                        <li className="inline-block text-body1 text-neutral-500 hover:text-neutral-900 duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-neutral-900 after:transition-width after:duration-300 hover:after:w-full "><Link to = "/projects">Projects</Link></li>
                        <li className="inline-block text-body1 text-neutral-500 hover:text-neutral-900 duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-neutral-900 after:transition-width after:duration-300 hover:after:w-full "><Link to = "/experiences">Experiences</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;