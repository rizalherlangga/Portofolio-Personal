import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardEx from '../components/Card'

function Experiences () {
    return(
        <>
        <div className="max-w-xl mx-auto px-2 py-8">
          <Navbar />
          <h1 className='mt-[100px] text-[25px] font-medium'>Experiences</h1>
          <br />
          <CardEx />
          <Footer />
        </div>
        </>
    )
}

export default Experiences;