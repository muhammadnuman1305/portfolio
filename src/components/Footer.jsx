import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  // State to hold GitHub information

  // Variants for button animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 1,
    },
  };

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <a
        className="footer-link"
        href="https://github.com/muhammadnuman1305/portfolio"
      >
        <p>
          <span>▷</span> Designed and built by Numan Zahid &copy; {currentYear}
        </p>
      </a>

      {/* Buy Me A Coffee link */}
      {/* <motion.a
        href="https://www.buymeacoffee.com/numanzahid"
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={{ ease: "easeInOut" }}
      >
        <motion.img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
          alt="Buy Me A Coffee"
          style={{
            height: "40px",
            scale: 1,
            width: "auto",
            marginTop: "10px",
          }}
          variants={buttonVariants}
          transition={{ ease: "easeInOut" }}
        />
      </motion.a> */}
    </footer>
  );
};

export default Footer;
