import Accordian from "./Accordion";

const FAQ = () => {
  return (
    <div className="mt-44 mb-44">
      <div className="text-4xl font-semibold justify-center flex">
        Frequently Asked Questions
      </div>
      <div className="mt-8 text-md font-normal mx-auto text-center w-[600px]">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </div>
      <Accordian />
    </div>
  );
};

export default FAQ;
