import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/project-experiences/Card'
import DataExper from '../components/project-experiences/DataExper'

function Experiences () {
    return(
        <>
        <div className="max-w-xl mx-auto px-2 py-8">
          <Navbar />
          <h1 className='mt-[100px] text-[25px] font-medium'>Experiences</h1>
          <br />
          <Card CardData = {DataExper}/>
          <Footer />
        </div>
        </>
    )
}

export default Experiences;