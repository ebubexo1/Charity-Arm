import { motion } from 'framer-motion';

const stats = [
  { number: "35+", label: "Communities Reached" },
  { number: "68+", label: "Monthly Donors" },
  { number: "8k+", label: "Lives Impacted" },
  { number: "93+", label: "Successful Projects" }
];

const StatsCounter = () => {
  return (
    <section className="bg-brandBlue py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-5xl md:text-6xl font-black text-brandYellow mb-2">
              {stat.number}
            </div>
            <div className="text-white text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;