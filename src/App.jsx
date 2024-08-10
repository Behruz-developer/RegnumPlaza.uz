import About from "./Components/About/About"
// import Company from "./Components/Company/Compa
import Construction from "./Components/Construction/Construction"
import Footer from "./Components/Footer/Footer"
import Blocks_location from "./Components/Blocks_location/Blocks_location"
import Location from "./Components/Location/Location"
import Nav from "./Components/Nav/Nav"
import Upcoming from "./Components/Upcoming/Upcoming"
import img1 from './assets/images/intro1.png'
import img2 from './assets/images/intro1.png'
import Send_form from "./Components/Send_form/Send_form"

const App = () => {
  const images = [img1, img2];
  return (
    <>
      <Nav/>
      <Upcoming images={images}/>
      <About/>
      <Location/>
      {/* <Company/> */}
      <Location/>
      <Blocks_location/>
      <Send_form/>
      <Construction/>
      <Footer/>
    </>
  )
}

export default App