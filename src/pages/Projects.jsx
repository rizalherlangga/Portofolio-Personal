import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardProject from '../components/CardProject'

function Projects () {
    return(
        <>
        <div className="max-w-xl mx-auto px-2 py-8">
          <Navbar />
          <h1 className='mt-[100px] text-[25px] font-medium'>Projects</h1>
          <br />
          <CardProject />
          <Footer />
        </div>
        </>
    )
}

export default Projects;