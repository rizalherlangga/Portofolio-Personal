import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import DataExper from '../lib/DataExper';

function Experiences () {
    return(
        <>
        <div className="max-w-xl mx-auto px-7 py-2 ">
          <Navbar />
          <h1 className='mt-6 text-[25px] font-medium'>Experiences</h1>
          <br />
          <Card CardData = {DataExper}/>
          <Footer />
        </div>
        </>
    )
}

export default Experiences;