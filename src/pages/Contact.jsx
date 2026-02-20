import { motion } from 'framer-motion';
import { content } from '../data/content';
import Button from '../components/common/Button';

const Contact = () => (
  <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20"
  >
    <div>
      <h2 className="text-5xl font-black text-brandBlue mb-6 uppercase italic">Get In Touch</h2>
      <p className="text-gray-600 mb-10">Have questions or want to volunteer? Reach out to us today.</p>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-brandOrange uppercase text-sm">Call Us</h4>
          {content.contact.phones.map(phone => (
            <p key={phone} className="text-2xl font-bold text-brandBlue">{phone}</p>
          ))}
        </div>
        <div>
          <h4 className="font-bold text-brandOrange uppercase text-sm">Follow Us</h4>
          <p className="text-lg font-medium text-gray-700">IG: @{content.contact.social.instagram}</p>
          <p className="text-lg font-medium text-gray-700">FB: {content.contact.social.facebook}</p>
        </div>
      </div>
    </div>

    <form className="bg-white p-10 shadow-2xl rounded-2xl border-t-8 border-brandOrange">
      <div className="grid gap-6">
        <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-100 rounded-md outline-none focus:ring-2 ring-brandOrange" />
        <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-100 rounded-md outline-none focus:ring-2 ring-brandOrange" />
        <textarea placeholder="Your Message" rows="5" className="w-full p-4 bg-gray-100 rounded-md outline-none focus:ring-2 ring-brandOrange"></textarea>
        <Button variant="primary" type="submit">Send Message »</Button>
      </div>
    </form>
  </motion.section>
);

export default Contact;