import Logo from '../assets/images/Rizal.png'

function Navbar () {
    return (
        <nav className='mb-10'>
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
    )
}

export default Navbar;