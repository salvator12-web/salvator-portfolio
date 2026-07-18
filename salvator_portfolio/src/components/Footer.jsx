import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
          {/* Left Section */}
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Salvator Ahishakiye. All rights reserved.
          </p>

          {/* Right Section - Real Contact Links */}
          <div className="flex space-x-5">
            <a
              href="https://github.com/QUIRKE12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:salvatorahishakiye@gmail.com"
              className="hover:text-gray-300 text-xl"
              aria-label="Email"
              title="salvatorahishakiye@gmail.com"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/250791112656"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              aria-label="WhatsApp"
              title="+250 791 112 656"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
