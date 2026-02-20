import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
      <img 
        src="/assets/images/heromain.jpeg" 
        alt="Mission"
        className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-125 saturate-125 scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 text-left">
        <h1 className="text-[#FEFEFE] font-black text-4xl sm:text-5xl md:text-7xl uppercase leading-[0.9] mb-6 break-words">
          Illuminating <br />
          <span className="text-[#F66C20]">The Path</span>
        </h1>
        
        <p className="text-[#FEFEFE] text-base md:text-xl max-w-xl mb-10 leading-relaxed font-medium opacity-90">
          Dedicated to creating a brighter, more equitable, and sustainable future 
          by addressing the most pressing needs of our community.
        </p>

        <button 
          onClick={() => navigate('/about')}
          className="w-full md:w-auto bg-[#F66C20] text-[#FEFEFE] px-10 py-5 font-black uppercase text-xs md:text-sm tracking-widest hover:bg-[#FEFEFE] hover:text-[#002778] transition-all"
        >
          Discover Our Mission
        </button>
      </div>
    </section>
  );
};

export default Hero;
