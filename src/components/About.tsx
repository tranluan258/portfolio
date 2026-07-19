const highlights = [
  "Designed a configurable money-rules engine that validates transaction eligibility with condition parsing, time-range filtering and approval workflows.",
  "Built a payment source ranking service that filters and ranks multiple payment methods across hundreds of service IDs.",
  "Integrated direct debit and one-touch banking flows across multiple banks, including non-OTP cash-in.",
  "Built fallback logic for tokenized auto-debit so recurring billing keeps charging when the primary payment source fails.",
  "Delivered a new SDK API for installment-based client integrations.",
  "Integrated fraud/risk checks into transaction verification flows with structured error-code handling.",
];

const About = () => {
  return (
    <section className="px-5 py-32" id="about">
      <div className="container mx-auto md:w-[70%]">
        <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2 text-center">
          What I Build
        </h2>
        <ul className="space-y-4">
          {highlights.map((item) => (
            <li key={item} className="flex">
              <span className="text-indigo-600 mr-3">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
