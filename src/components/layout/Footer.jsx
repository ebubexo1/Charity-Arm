import { Link } from 'react-router-dom';

const Footer = () => {
  // We define the data directly here to avoid "undefined" errors
  const footerData = {
    description: "Spreading Light Foundation is a visionary organization dedicated to illuminating the path to a brighter future for all, by caring for the community and passionately serving its members.",
    phones: ["09094796926", "08080625424"],
    email: "info@spreadinglightfoundation.org",
    website: "www.spreadinglightfoundation.org",
    socials: {
      instagram: "the_spreadinglightfoundation",
      facebook: "The Spreading Light Foundation"
    }
  };

  return (
    <footer className="bg-[#000000] text-[#FEFEFE] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            Spreading<span className="text-[#F66C20]">Light</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed italic">
            {footerData.description}
          </p>
        </div>

        {/* Contact Column - Using your verified details */}
        <div>
          <h4 className="text-[#FDB92E] font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase">Phone Numbers:</span>
              <span className="font-bold">{footerData.phones.join(' / ')}</span>
            </li>
            <li className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase">Email Address:</span>
              <span className="font-bold">{footerData.email}</span>
            </li>
          </ul>
        </div>

        {/* Social Column */}
        <div>
          <h4 className="text-[#FDB92E] font-bold uppercase tracking-widest text-sm mb-6">Follow Our Journey</h4>
          <div className="flex flex-col gap-4 text-sm">
            <a href="#" className="hover:text-[#F66C20] transition-colors">Facebook: {footerData.socials.facebook}</a>
            <a href="#" className="hover:text-[#F66C20] transition-colors">Instagram: @{footerData.socials.instagram}</a>
            <a href={`https://${footerData.website}`} target="_blank" className="text-[#F66C20] font-bold underline">
              {footerData.website}
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-600 uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} The Spreading Light Foundation | Designed by Thomson Toolz
      </div>
    </footer>
  );
};

export default Footer;