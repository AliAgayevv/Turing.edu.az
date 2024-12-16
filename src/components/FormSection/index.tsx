import { useState } from "react";
import formIcon from "../../assets/vectors/formIcon.png";
import SeeAll_btn from "../SeeAll_btn";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string().max(50, "Too Long!").required("Required"),
  surname: Yup.string().max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().typeError("Must be a number").required("Required"),
});

// TODO : Formik and yup or z validation add.
// Seçim verileri için tür tanımı
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
    <div className="flex justify-between mt-6" id="form">
      {/* Sol taraf: Form Alanı */}
      <div className="w-[856px] h-[455px] border p-6">
        <h3 className="uppercase text-white_dark">Send Us A Message</h3>
        <h1 className="font-jakarta font-[500] text-5xl text-black_medium">
          Start Today!
        </h1>
        <p className="text-[14px] opacity-70 text-black_dark mt-3">
          You can select your area of specialization below (more than one
          selection is possible)
        </p>

        {/* Uzmanlık Seçim Butonları */}
        <div className="w-full h-20 flex justify-start gap-3 items-center">
          {fakeData.map((data) => (
            <button
              key={data.id}
              onClick={() => handleSelect(data.id)}
              className={`${
                selected.includes(data.id)
                  ? "bg-blue_light text-white"
                  : "bg-white_ultraLight"
              } rounded-lg px-3 border py-1 transition-all delay-100 cursor-pointer`}
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
            selectedSpecialties.length === 0
              ? alert("Please select a specialty")
              : console.log(values, selectedSpecialties);
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col">
              <div className="grid grid-cols-2 gap-4">
                <Field
                  placeholder="Name"
                  className="w-[392px] h-[52px] border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                  name="name"
                />
                <Field
                  className="w-[392px] h-[52px] border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                  placeholder="Surname"
                  name="surname"
                />
                <Field
                  className="w-[392px] h-[52px] border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                  placeholder="Email"
                  name="email"
                />
                <Field
                  className="w-[392px] h-[52px] border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                  placeholder="Phone Number"
                  name="phone"
                />
              </div>
              <div className="w-[145px] h-[48px]">
                <button
                  type="submit"
                  className="border px-8 py-4 mt-8 bg-blue_ultraMedium text-white rounded-full"
                >
                  Apply Now
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* <form className="grid grid-cols-2 gap-y-6 mt-5">
          <div className="w-[392px] h-[52px]">
            <Form_input placeholder="Name" />
          </div>
          <div className="w-[392px] h-[52px]">
            <Form_input placeholder="Surname" />
          </div>
          <div className="w-[392px] h-[52px]">
            <Form_input placeholder="Email" />
          </div>
          <div className="w-[392px] h-[52px]">
            <Form_input placeholder="Phone" />
          </div>
        </form> */}
      </div>

      <div className="w-[416px] h-[455px] bg-white border rounded-2xl p-6">
        <div className="h-[241px] w-full">
          <img
            src={formIcon}
            className="w-full h-full object-contain"
            alt="Form Icon"
          />
        </div>
        <h4 className="font-[500] text-xl text-black_ultraDark font-inter">
          Help to Choose
        </h4>
        <p className="opacity-70 text-[14px] text-black_dark">
          10 suallıq sorğumuza qatıl, potensialına uyğun ixtisası daha sürətli
          öyrən.
        </p>
        <div className="h-[48px] w-[145px] mt-8">
          <SeeAll_btn>Start Test</SeeAll_btn>
        </div>
      </div>
    </div>
  );
}