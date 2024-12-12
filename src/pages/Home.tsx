import Hero from "./Hero";
import MutualChoices from "./MutualChoices";

export default function Home() {
  return (
    <div className="bg-blue_ultraDark mx-auto">
      <div className="h-screen w-11/12 mx-auto ">
        <Hero />
        <MutualChoices />
      </div>
    </div>
  );
}
