import Reels_card from "../components/Reels_card";
import examplePhoto from "../assets/photos/studentExamplePhoto.jpeg";
import SeeAll_btn from "../components/SeeAll_btn";
import { Link } from "react-router";

export default function OurGraduates() {
  return (
    <div className="w-11/12 mx-auto py-20">
      <h3 className="uppercase text-white_dark">Our Graduates</h3>
      <div className="flex flex-col md:flex-row justify-between items-center pr-10">
        <h1 className="text-[48px] md:text-5xl font-jakarta font-[500] text-black_medium py-4">
          Accelerate your career
          <br />
          in <span className="text-blue_light">Turing Academy</span>
        </h1>
        <Link to={"/graduates"}>
          <div className="h-[56px] w-[145px]">
            <SeeAll_btn>See all</SeeAll_btn>
          </div>
        </Link>
      </div>
      <div className="flex flex-col overflow-x-auto gap-10 sm:gap-5 md:grid-cols-2 lg:gap-0  sm:grid-cols-2 sm:grid lg:grid-cols-4 py-16">
        <Reels_card
          coverPhoto={examplePhoto}
          category={"UX/UI"}
          studentName={"Elmira Nəcəfli"}
          videoUrl={
            "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0"
          }
          desc={"UX/UI designer at Spotify"}
        />
        <Reels_card
          coverPhoto={examplePhoto}
          category={"UX/UI"}
          studentName={"Elmira Nəcəfli"}
          videoUrl={
            "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0"
          }
          desc={"UX/UI designer at Spotify"}
        />
        <Reels_card
          coverPhoto={examplePhoto}
          category={"UX/UI"}
          studentName={"Elmira Nəcəfli"}
          videoUrl={
            "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0"
          }
          desc={"UX/UI designer at Spotify"}
        />
        <Reels_card
          coverPhoto={examplePhoto}
          category={"UX/UI"}
          studentName={"Elmira Nəcəfli"}
          videoUrl={
            "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0"
          }
          desc={"UX/UI designer at Spotify"}
        />
      </div>
    </div>
  );
}
