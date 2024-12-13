import Events from "./Events";
import Hero from "./Hero";
import MutualChoices from "./MutualChoices";
import OurGraduates from "./OurGraduates";
import TuringAdvantage from "./TuringAdvantage";

export default function Home() {
  return (
    <div className="bg-blue_ultraDark mx-auto">
      <div className="h-screen w-screen mx-auto">
        <Hero />
        <MutualChoices />
        <div className="bg-black_dark">
          <TuringAdvantage />
        </div>
        <OurGraduates />
        <div className="bg-blue_ultraDark">
          <Events />
        </div>
      </div>
    </div>
  );
}
