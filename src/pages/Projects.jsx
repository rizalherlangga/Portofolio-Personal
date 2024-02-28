import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TempProjects from '../components/card-projects/TempProjects'
import projectData from '../components/card-projects/projectData';

function Projects () {
    return(
        <>
        <div className="max-w-xl mx-auto px-2 py-8">
          <Navbar />
          <h1 className='mt-[100px] text-[25px] font-medium'>Projects</h1>
          <br />
          <TempProjects dataCard={projectData} />
          <Footer />
        </div>
        </>
    )
}

export default Projects;