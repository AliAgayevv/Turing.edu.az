import { useState } from "react";
import formIcon from "../../assets/vectors/formIcon.png";
import SeeAll_btn from "../SeeAll_btn";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string().max(50, "Too Long!").required("Required"),
  surname: Yup.string().max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be a valid phone number")
    .required("Required"),
});

interface FakeDataItem {
  id: number;
  inner: string;
}

const fakeData: FakeDataItem[] = [
  { id: 1, inner: "UX/UI Design" },
  { id: 2, inner: "Back-end Development" },
  { id: 3, inner: "Front-end Development" },
  { id: 4, inner: "Computer Science" },
];

interface FormSectionProps {
  applyLink?: string;
}

export default function FormSection({ applyLink }: FormSectionProps) {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (index: number) => {
    setSelected((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }
      return [...prev, index];
    });
  };

  const handleSubmit = (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    const selectedSpecialties = fakeData
      .filter((data) => selected.includes(data.id))
      .map((data) => data.inner);

    if (selectedSpecialties.length === 0) {
      alert("Please select a specialty");
    } else {
      console.log(values, selectedSpecialties);

      // Use applyLink if provided
      if (applyLink) {
        window.open(applyLink, "_blank");
      } else {
        alert("Form submitted successfully!");
      }

      resetForm();
      setSelected([]);
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row sm:gap-4 mt-6 bg-white h-full justify-between "
      id="form"
    >
      <div className="w-full md:w-11/12 h-auto bg-white md:border p-6 rounded-2xl">
        <h3 className="uppercase text-white_dark">Send Us A Message</h3>
        <h1 className="font-jakarta font-[500] text-5xl text-black_medium">
          Start Today!
        </h1>
        <p className="text-[14px] opacity-70 text-black_dark mt-3">
          You can select your area of specialization below (more than one
          selection is possible)
        </p>

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
        <Formik
          initialValues={{ name: "", surname: "", email: "", phone: "" }}
          validationSchema={FormSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 bg-white">
              <div className="relative">
                <Field
                  placeholder="Name"
                  className="w-full border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="relative">
                <Field
                  placeholder="Surname"
                  className="w-full border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                  name="surname"
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="relative">
                <Field
                  placeholder="Email"
                  className="w-full border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="relative">
                <Field
                  placeholder="Phone Number"
                  className="w-full border-[1px] disabled:bg-white_medium rounded-lg p-4 outline-black_ultraLight hover:bg-white_ultraLight transition-all delay-100"
                  name="phone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
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
        <div className="h-[48px] w-full mt-8  lg:w-1/2">
          <SeeAll_btn>Start Test</SeeAll_btn>
        </div>
      </div>
    </div>
  );
}
