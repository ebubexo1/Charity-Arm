const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 bg-[#FEFEFE]">
      {/* Changed to flex-col for mobile, md:flex-row for desktop */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* IMAGE: Responsive height */}
        <div className="w-full md:w-1/2">
          <img 
            src="/assets/images/img4.jpeg" 
            alt="Foundation Mission"
            className="w-full h-64 md:h-[400px] object-cover rounded-sm shadow-xl"
          />
        </div>

        {/* TEXT: Responsive alignment */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-[#002778] font-black text-3xl md:text-4xl uppercase mb-6 leading-tight">About Us</h2>
          
          <div className="text-[#000000] text-base md:text-lg leading-relaxed space-y-4">
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
              className="w-full md:w-auto bg-[#F66C20] text-[#FEFEFE] px-10 py-4 font-black uppercase text-xs md:text-sm tracking-widest hover:bg-[#002778] transition-all shadow-lg"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;