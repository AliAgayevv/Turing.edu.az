import Navbar from "../components/Navbar";
import Reels_card from "../components/Reels_card";
import fakePhoto from "../assets/photos/studentExamplePhoto.jpeg";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";

// TODO: Partdiyir responsive de footer falan, baxarsan bura

const fakeData = [
  {
    id: 1,
    category: "UX/UI",
    studentName: "Elmira Nəcəfli",
    desc: "UX/UI designer at Spotify",
    videoUrl:
      "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0",
    coverPhoto: fakePhoto,
  },
  {
    id: 2,
    category: "Java",
    studentName: "Vüsal Ataşov",
    desc: "Back-End Developer at ABB",
    videoUrl:
      "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0",
    coverPhoto: fakePhoto,
  },
  {
    id: 3,
    category: "UX/UI",
    studentName: "Elmira Nəcəfli",
    desc: "UX/UI designer at Spotify",
    videoUrl:
      "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0",
    coverPhoto: fakePhoto,
  },
  {
    id: 4,
    category: "Java",
    studentName: "Vüsal Ataşov",
    desc: "Back-End Developer at ABB",
    videoUrl:
      "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0",
    coverPhoto: fakePhoto,
  },
  {
    id: 5,
    category: "UX/UI",
    studentName: "Elmira Nəcəfli",
    desc: "UX/UI designer at Spotify",
    videoUrl:
      "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0",
    coverPhoto: fakePhoto,
  },
  {
    id: 6,
    category: "Java",
    studentName: "Vüsal Ataşov",
    desc: "Back-End Developer at ABB",
    videoUrl:
      "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0",
    coverPhoto: fakePhoto,
  },
  {
    id: 7,
    category: "UX/UI",
    studentName: "Elmira Nəcəfli",
    desc: "UX/UI designer at Spotify",
    videoUrl:
      "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0",
    coverPhoto: fakePhoto,
  },
  {
    id: 8,
    category: "Java",
    studentName: "Vüsal Ataşov",
    desc: "Back-End Developer at ABB",
    videoUrl:
      "https://www.youtube.com/embed/rW65vAyYT0I?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0",
    coverPhoto: fakePhoto,
  },
];

export default function Reels() {
  return (
    <div className="">
      <Navbar isDark={true} />
      <div className="w-screen bg-white">
        <div className="w-11/12 mx-auto h-[1900px]">
          <h1 className="text-5xl font-jakarta font-[500] text-black_dark pt-[100px]">
            Our Graduates
          </h1>
          <div className="flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-y-6 bg-white">
            {fakeData.map((data) => (
              <Reels_card
                category={data.category}
                studentName={data.studentName}
                desc={data.desc}
                videoUrl={data.videoUrl}
                coverPhoto={data.coverPhoto}
              />
            ))}
          </div>

          <div className="flex justify-center items-center mt-6">
            <button className="flex justify-center items-center border p-4 rounded-full">
              Load More
            </button>
          </div>

          <div className="mt-5">
            <FormSection />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen">
        <Footer />
      </div>
    </div>
  );
}
