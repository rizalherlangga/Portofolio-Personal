import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TempProjects from '../components/TempProjects'
import projectData from '../lib/projectData';

function Projects () {
    return(
        <>
        <div className="max-w-xl mx-auto px-7 py-2 ">
          <Navbar />
          <h1 className='mt-6 text-[25px] font-medium'>Projects</h1>
          <br />
          <TempProjects dataCard={projectData} />
          <Footer />
        </div>
        </>
    )
}

export default Projects;