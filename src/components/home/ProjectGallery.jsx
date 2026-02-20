const ProjectGallery = () => {
  const images = [
    { src: '/assets/images/img2.jpeg', title: 'Education Support' },
    { src: '/assets/images/img5.jpeg', title: 'Community Care' },
    { src: '/assets/images/img7.jpeg', title: 'Providing Healthcare' },
  ];

  return (
    <section className="w-full py-12 bg-[#FEFEFE]">
      {/* overflow-hidden prevents horizontal scrolling bugs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-black text-[#002778] uppercase text-center mb-8">
          Our Impact
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative rounded-sm overflow-hidden shadow-lg h-72 md:h-80 bg-gray-200">
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover brightness-110 contrast-110 saturate-110 transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                    e.target.parentElement.style.display = 'none';
                }}
              />
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-[#002778] to-transparent">
                <p className="text-[#FEFEFE] text-[10px] md:text-xs font-black uppercase tracking-widest">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;