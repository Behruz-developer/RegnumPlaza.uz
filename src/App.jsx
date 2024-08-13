import About from "./Components/About/About";
import Company from "./Components/Company/Company";
import Construction from "./Components/Construction/Construction";
import Footer from "./Components/Footer/Footer";
import Blocks_location from "./Components/Blocks_location/Blocks_location";
import Location from "./Components/Location/Location";
import Nav from "./Components/Nav/Nav";
import Upcoming from "./Components/Upcoming/Upcoming";
import img1 from "./assets/images/intro1.png";
import img2 from "./assets/images/intro1.png";
import Send_form from "./Components/Send_form/Send_form";
import Block_average from "./Components/Block_average/Block_average";
import Houses_plan from "./Components/Houses_plan/Houses_plan";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });

    return () => window.removeEventListener("load", () => setIsLoading(false));
  }, []);

  const images = [img1, img2];
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div id="top">
            <Nav />
            <Upcoming images={images} />
            <div id="about">
              <About />
            </div>
            <div id="location">
              <Location />
            </div>
            <div id="average">
              <Block_average />
            </div>
            <div id="blocks_location">
              <Blocks_location />
            </div>
            <div id="houses_plan">
              <Houses_plan />
            </div>
            <div id="send_form">
              <Send_form />
            </div>
            <div id="construction">
              <Construction />
            </div>
            <div id="company">
              <Company />
            </div>
            <div id="footer">
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
