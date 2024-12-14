// FAQ.jsx
import FAQItem from "../FAQ_item";
import faqData from "../../datas/FAQdata.json";

export default function FAQ({ category }) {
  // Find the category object that matches the selected category
  const categoryData = faqData.find((item) => item.category === category);

  // Extract the questions array or default to an empty array if not found
  const faqs = categoryData?.questions || [];

  console.log(`Category: ${category}`);
  console.log("Fetched FAQs:", faqs);

  return (
    <div className="px-7 py-10 flex flex-col md:flex-row justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="font-jakarta font-[500] text-5xl text-black_solid">
          FAQ
        </h2>
        <p className="text-black_light text-[14px]">
          We're here to support your design journey.
        </p>
      </div>
      <div className="flex flex-col items-start w-full md:w-2/3">
        {faqs.length > 0 ? (
          faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))
        ) : (
          <p className="text-gray-500">No FAQs available for this category.</p>
        )}
      </div>
    </div>
  );
}
