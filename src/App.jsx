import About from "./Components/About/About"
import Company from "./Components/Company/Company"
import Construction from "./Components/Construction/Construction"
import Footer from "./Components/Footer/Footer"
import Blocks_location from "./Components/Blocks_location/Blocks_location"
import Location from "./Components/Location/Location"
import Nav from "./Components/Nav/Nav"
import Upcoming from "./Components/Upcoming/Upcoming"
import img1 from './assets/images/intro1.png'
import img2 from './assets/images/intro1.png'
import Block_average from "./Components/Block_average/Block_average"
import Houses_plan from "./Components/Houses_plan/Houses_plan"

const App = () => {
  const images = [img1, img2];
  return (
    <>
      <Nav/>
      <Upcoming images={images}/>
      <About/>
      <Location/>
      <Block_average/>
      <Blocks_location/>
      <Houses_plan/>
      <Construction/>
      <Company/>
      <Footer/>
    </>
  )
}

export default App