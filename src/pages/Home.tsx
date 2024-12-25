import Footer from "../components/Footer";
import Events from "./Events";
import Hero from "./Hero";
import MutualChoices from "./MutualChoices";
import OurGraduates from "./OurGraduates";
import Partners from "./Partners";
import TuringAdvantage from "./TuringAdvantage";

// TODO Home section da consoel acnada video partlayir
export default function Home() {
  return (
    <div className="bg-blue_ultraDark mx-auto  ">
      <div className="h-screen w-screen mx-auto">
        <Hero />
        <MutualChoices />
        <div className="bg-black_dark">
          <TuringAdvantage />
        </div>
        <div className="bg-white">
          <OurGraduates />
        </div>
        <div className="bg-blue_ultraDark">
          <Events />
        </div>
        <div className="bg-white">
          <div className="w-11/12 mx-auto h-[1500px] sm:h-auto">
            <Partners />
          </div>
        </div>
        <div className="h-screen relative -z-[2]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
