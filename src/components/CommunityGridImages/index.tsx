import image1 from "../../assets/photos/gridPhotos/image1.jpeg";
import image2 from "../../assets/photos/gridPhotos/image2.jpeg";
import image3 from "../../assets/photos/gridPhotos/image3.jpeg";
import image4 from "../../assets/photos/gridPhotos/imgae4.jpeg";
import image5 from "../../assets/photos/gridPhotos/image5.jpeg";
import image6 from "../../assets/photos/gridPhotos/image6.jpeg";
import image7 from "../../assets/photos/gridPhotos/image7.jpeg";
import image8 from "../../assets/photos/gridPhotos/image8.jpeg";
import image9 from "../../assets/photos/gridPhotos/image9.png";
import image10 from "../../assets/photos/gridPhotos/image10.jpeg";
import image11 from "../../assets/photos/gridPhotos/image11.jpeg";
import image12 from "../../assets/photos/gridPhotos/image12.jpeg";
import theySelectUs1 from "../../assets/photos/ali.jpg";
import { useGetCommunityContentQuery } from "../../store/services/communityApi";

const ResponsiveImageGrid = () => {
  const { data, isLoading, isError } = useGetCommunityContentQuery({});
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;
  const fakeData = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  return (
    <div className="w-[95%] mx-auto">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-[800px] ">
          <div className="flex h-[25%]" id="first-row">
            <div className="relative w-[27%] h-full">
              <img
                src={data?.gallery.galleryPhotos[0] || fakeData[0]}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-[32%] h-full">
              <img
                src={data?.gallery.galleryPhotos[1] || fakeData[1]}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-[41%] h-full">
              <img
                src={data?.gallery.galleryPhotos[2] || fakeData[2]}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex h-[50%]" id="second-row">
            <div className="relative w-[27%] h-full">
              <img
                src={data?.gallery.galleryPhotos[3] || fakeData[3]}
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" w-[36.32%] h-[150%]">
              <div className="relative w-[100%] h-[33.33%]">
                <img
                  src={data?.gallery.galleryPhotos[4] || fakeData[4]}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="relative flex w-[200%] h-[100%]">
                <div className="relative w-[25%] h-[66.5%]">
                  <img
                    src={data?.gallery.galleryPhotos[8] || fakeData[8]}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="relative w-[60%] h-[46.7%]">
                  <img
                    src={data?.gallery.galleryPhotos[9] || fakeData[9]}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-[22%] h-[50%]">
              <img
                src={data?.gallery.galleryPhotos[5] || fakeData[5]}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-[22%] h-full">
              <img
                src={data?.gallery.galleryPhotos[6] || fakeData[6]}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex h-[50%] relative " id="third-row">
            <div className="relative w-[25.18%] h-[50%]">
              <img
                src={data?.gallery.galleryPhotos[7] || fakeData[7]}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-[16.9%] h-[50%] -z-10">
              <img
                src={data?.gallery.galleryPhotos[8] || fakeData[8]}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-[25.18%] h-[50%]">
              <img
                src={data?.gallery.galleryPhotos[9] || fakeData[9]}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-[33%] h-[50%]">
              <img
                src={data?.gallery.galleryPhotos[10] || fakeData[10]}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Onlar
            <span className="inline-flex items-center mx-2">
              <img
                src={theySelectUs1}
                alt="Profile 1"
                className="rounded-full border-2 w-14 h-14  object-cover border-white mr-[-8px]"
              />
              <img
                src={fakeData[3]}
                alt="Profile 2"
                className="rounded-full border-2 w-14 h-14 max-h-20 object-cover ml-5 mt-10 border-white"
              />
            </span>
            bizi seçərək
          </h1>

          <h2 className="text-5xl md:text-7xl font-bold mt-4">
            <span className="text-[#3B82F6]">#BirAddımÖndə</span>
            <span className="text-white"> oldu!</span>
          </h2>

          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            Learn highly demanded skills through practical courses, created by
            trusted industry professionals, that focus on real-world
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveImageGrid;
