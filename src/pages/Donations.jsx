import { motion } from 'framer-motion';

const Donations = () => {
  const impactAreas = [
    {
      title: "Food & Shelter",
      text: "Addressing the pressing needs of the homeless through selfless service."
    },
    {
      title: "Healthcare Access",
      text: "Providing access to healthcare and medical treatments for the community."
    },
    {
      title: "Education & Opportunity",
      text: "Creating a brighter, more equitable future through education and economic opportunities."
    }
  ];

  return (
    /* Changed pt-40 to pt-24 on mobile so you don't have to scroll forever */
    <div className="pt-24 md:pt-40 pb-20 px-4 md:px-6 bg-[#FEFEFE]">
      <div className="text-center mb-12 md:mb-16">
        {/* FIXED: text-3xl for mobile, md:text-5xl for desktop */}
        {/* Replace the h1 in Donations.jsx with this */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#002778] mb-6 uppercase leading-tight px-2">
          Support Our <br className="block sm:hidden" /> Mission
        </h1>
        <p className="max-w-2xl mx-auto text-[#000000]/70 text-base md:text-lg italic px-2">
          "Every donation helps us shine a light on the darkest corners of our society."
        </p>
      </div>

      {/* FIXED: grid-cols-1 for mobile, md:grid-cols-3 for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {impactAreas.map((area) => (
          <div key={area.title} className="bg-white p-6 md:p-10 shadow-xl border-t-8 border-[#F66C20] flex flex-col">
            <h3 className="text-[#002778] font-black text-lg md:text-xl uppercase mb-4">
              {area.title}
            </h3>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base flex-grow">
              {area.text}
            </p>
            <button className="w-full bg-[#002778] text-white py-3 md:py-4 font-black uppercase text-xs md:text-sm tracking-widest hover:bg-[#F66C20] transition-colors">
              Donate to this Cause
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;