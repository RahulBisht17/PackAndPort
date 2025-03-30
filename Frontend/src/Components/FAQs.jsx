import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does Pack N Port work?",
    answer:
      "Pack N Port offers hassle-free moving services. Just enter pickup and drop details, and our team takes care of the rest!",
  },
  {
    question: "What are the available service areas?",
    answer:
      "We operate in multiple cities, covering local and intercity transportation. Check our service areas for more details.",
  },
  {
    question: "Are my items safe during transit?",
    answer:
      "Absolutely! We ensure your belongings are packed securely and transported safely with our trusted logistics partners.",
  },
  {
    question: "How do I get an estimated price?",
    answer:
      "Use our price estimator by entering pickup, drop details, and uploading images of your items for a quick estimate.",
  },
  {
    question: "What modes of transport are available?",
    answer:
      "We offer multiple transport options, including mini trucks, tempo, and large carriers, depending on your needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 w-full p-4 rounded-lg mx-auto pb-10 sm:px-10 md:px-14 max-w-7xl">
      <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-700 mb-6 md:mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-cyan-700 rounded-lg p-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-md sm:text-lg md:text-xl font-medium text-gray-700">
                {faq.question}
              </p>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm sm:text-md md:text-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
