import Hero from "./Hero";
import MutualChoices from "./MutualChoices";
import TuringAdvantage from "./TuringAdvantage";

export default function Home() {
  return (
    <div className="bg-blue_ultraDark mx-auto">
      <div className="h-screen w-screen mx-auto ">
        <Hero />
        <MutualChoices />
        <div className="bg-black_dark">
          <TuringAdvantage />
        </div>
      </div>
    </div>
  );
}
