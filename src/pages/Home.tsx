import Specialty_card from "../components/Specialty_card";

export default function Home() {
  return (
    <div className="bg-white_ultraDark w-screen h-screen flex justify-center items-center gap-20">
      <Specialty_card
        category={"Design"}
        img={""}
        desc={"Design Intuitive Digital Experiences"}
        title={"UX/UI Design"}
        hiddenText={
          "You will learn how to transform houses and apartments, create drawings and 3D visualization. You can take high-paying orders or open a design studio. You can take high..."
        }
      />
    </div>
  );
}
