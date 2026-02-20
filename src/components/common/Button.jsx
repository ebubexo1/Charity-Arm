import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * A reusable button that supports both Link (internal) 
 * and standard button clicks, with Framer Motion animations.
 */
const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', // primary, outline, or dark
  className = '',
  type = 'button' 
}) => {
  
  // Base styles matching your design
  const baseStyles = "px-8 py-3 rounded-md font-bold transition-all duration-300 uppercase text-sm tracking-wider flex items-center justify-center gap-2 shadow-md";
  
  // Variant styles based on your foundation's brand colors
  const variants = {
    primary: "bg-brandOrange text-white hover:bg-brandBlue",
    outline: "border-2 border-brandOrange text-brandOrange hover:bg-brandOrange hover:text-white",
    dark: "bg-brandDark text-white hover:bg-brandOrange",
    white: "bg-white text-brandBlue hover:bg-brandYellow hover:text-white"
  };

  const selectedVariant = variants[variant] || variants.primary;

  // Animation settings for Framer Motion
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  // If "to" exists, it's a React Router Link
  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={`${baseStyles} ${selectedVariant} ${className}`}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // Otherwise, it's a standard button
  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${selectedVariant} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;