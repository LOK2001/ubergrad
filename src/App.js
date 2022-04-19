import React from 'react'
import Experts from './components/experts/Experts'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import WhyChooseUsa from './components/why choose usa/WhyChooseUsa'
import Eligibilityrequrements from './components/eligibilityRequrements/Eligibilityrequrements'
import WhyStudyInUsa from './components/why study in usa/WhyStudyInUsa'
import MoreStats from './components/morestatsinusa/MoreStats'
function App() {
  return (
    <div> 
      {/* {call navbar} */}  
      {/* <Navbar/> */}

      {/* {call why study in usa} */}
      <WhyStudyInUsa/>
      {/* {call why choose usa} */}
       <WhyChooseUsa/>
      {/* call more stats in usa */}
       {/* <MoreStats/> */}
      {/* call eligibilityrequrements */}
       <Eligibilityrequrements/>
      {/* call ubergrads */}
       
      {/* call experts */}
       <Experts/>
      {/* call footer */}
     <Footer/> 
    </div>
  )
}

export default App