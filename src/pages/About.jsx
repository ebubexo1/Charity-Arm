import React from 'react';

// 1. We define it as 'AboutSection'
const AboutSection = () => {
  return (
    <section className="py-20 bg-[#FEFEFE]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE PART */}
        <div className="w-full md:w-1/2">
          <img 
            src="/assets/images/img4.jpeg" 
            alt="Foundation Mission"
            className="w-full h-[400px] object-cover rounded-sm shadow-xl"
          />
        </div>

        {/* TEXT PART */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-[#002778] font-black text-4xl uppercase mb-6">About Us</h2>
          
          <div className="text-[#000000] text-lg leading-relaxed space-y-4">
            <p>
              Spreading Light Foundation is a visionary organization dedicated to illuminating the path 
              to a brighter future for all...
            </p>
            <p className="font-bold text-[#F66C20]">
              Together, we can make a difference, and create a world that is more just, equitable, 
              and sustainable for all.
            </p>
          </div>

          <div className="mt-8">
            <button 
              onClick={() => window.location.href = '/donations'}
              className="bg-[#F66C20] text-[#FEFEFE] px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#002778] transition-all shadow-lg cursor-pointer"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. We MUST export it as 'AboutSection'
export default AboutSection;