const FeatureCards = () => {
  const data = [
    { title: "Clean water", img: "/assets/images/img1.jpeg", text: "Donation for Clean Water to the...", color: "bg-[#1a1a1a]" },
    { title: "Educations", img: "/assets/images/img2.jpeg", text: "Donating to support education...", color: "bg-[#F66C20]" },
    { title: "Healthy Food", img: "/assets/images/img3.jpeg", text: "Donation for Healthy Food to...", color: "bg-[#1a1a1a]" },
  ];

  return (
    /* mt-10 for mobile, -mt-32 only for desktop. grid-cols-1 for mobile. */
    <div className="relative z-50 mt-10 md:-mt-32 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
      {data.map((card, i) => (
        <div key={i} className={`${card.color} p-6 md:p-10 text-white flex gap-4 items-start group transition-all`}>
          <div className="flex-1">
            <h4 className="text-[#FDB92E] font-bold italic mb-2 uppercase text-[10px] md:text-xs tracking-widest">{card.title}</h4>
            <p className="text-sm md:text-base font-bold mb-4 leading-snug">{card.text}</p>
          </div>

          <div className="w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden shrink-0 border border-white/10">
            <img 
              src={card.img} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              alt={card.title} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;