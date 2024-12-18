import { useState } from "react";
import formIcon from "../../assets/vectors/formIcon.png";
import SeeAll_btn from "../SeeAll_btn";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string().max(50, "Too Long!").required("Required"),
  surname: Yup.string().max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().typeError("Must be a number").required("Required"),
});

interface FakeDataItem {
  id: number;
  inner: string;
}

// Örnek veri
const fakeData: FakeDataItem[] = [
  { id: 1, inner: "UX/UI Design" },
  { id: 2, inner: "Back-end Development" },
  { id: 3, inner: "Front-end Development" },
  { id: 4, inner: "Computer Science" },
];

export default function FormSection() {
  const [selected, setSelected] = useState<number[]>([]);

  // Seçim işlemini gerçekleştiren fonksiyon
  const handleSelect = (index: number) => {
    setSelected((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }
      return [...prev, index];
    });
  };

  return (
    <div
      className="flex flex-col md:flex-row sm:gap-4 justify-between "
      id="form"
    >
      {/* Sol taraf: Form Alanı */}
      <div className="w-full md:w-[856px] h-[auto] border p-6">
        <h3 className="uppercase text-white_dark">Send Us A Message</h3>
        <h1 className="font-jakarta font-[500] text-5xl text-black_medium">
          Start Today!
        </h1>
        <p className="text-[14px] opacity-70 text-black_dark mt-3">
          You can select your area of specialization below (more than one
          selection is possible)
        </p>

        {/* Uzmanlık Seçim Butonları */}
        <div className="w-full h-auto flex flex-wrap justify-start gap-3 items-center mt-5">
          {fakeData.map((data) => (
            <button
              key={data.id}
              onClick={() => handleSelect(data.id)}
              className={`${
                selected.includes(data.id)
                  ? "bg-blue_light text-white"
                  : "bg-white_ultraLight"
              } rounded-lg px-3 py-1 border transition-all delay-100 cursor-pointer`}
            >
              {data.inner}
            </button>
          ))}
        </div>

        {/* Form Alanı */}
        <Formik
          initialValues={{ name: "", surname: "", email: "", phone: "" }}
          validationSchema={FormSchema}
          onSubmit={(values) => {
            const selectedSpecialties = fakeData
              .filter((data) => selected.includes(data.id))
              .map((data) => data.inner); // Get the inner text for the selected specialties
            if (selectedSpecialties.length === 0) {
              alert("Please select a specialty");
            } else {
              console.log(values, selectedSpecialties);
              values.name = "";
              values.surname = "";
              values.email = "";
              values.phone = "";
            }
          }}
        >
          <Form className="flex flex-col mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                placeholder="Name"
                className="w-full h-[52px] border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                name="name"
              />
              <Field
                className="w-full h-[52px] border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                placeholder="Surname"
                name="surname"
              />
              <Field
                className="w-full h-[52px] border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                placeholder="Email"
                name="email"
              />
              <Field
                className="w-full h-[52px] border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                placeholder="Phone Number"
                name="phone"
              />
            </div>
            <div className="w-full md:w-[145px] h-[48px] mt-6">
              <button
                type="submit"
                className="w-[145px] py-4 bg-blue_ultraMedium text-white rounded-full"
              >
                Apply Now
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {/* Sağ taraf: Görsel ve Diğer Bilgiler */}
      <div className="w-full md:w-[416px] h-auto bg-white border rounded-2xl p-6 mt-6 md:mt-0">
        <div className="h-[241px] w-full hidden md:block">
          <img
            src={formIcon}
            className="w-full h-full object-contain"
            alt="Form Icon"
          />
        </div>
        <h4 className="font-[500] text-xl text-black_ultraDark font-inter mt-6">
          Help to Choose
        </h4>
        <p className="opacity-70 text-[14px] text-black_dark">
          10 suallıq sorğumuza qatıl, potensialına uyğun ixtisası daha sürətli
          öyrən.
        </p>
        <div className="h-[48px] w-full mt-8 md:w-full">
          <div className="w-auto md:w-full">
            <SeeAll_btn>Start Test</SeeAll_btn>
          </div>
        </div>
      </div>
    </div>
  );
}
