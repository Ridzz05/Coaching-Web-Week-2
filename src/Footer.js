import { FaHeart, FaInstagram, FaGithub, FaGlobe, FaLandmark } from 'react-icons/fa';

function Footer({ bgColor, isColorDark }) {
  return (
    <footer 
      className="w-full py-6 mt-8 backdrop-blur-sm transition-all duration-300 ease-in-out"
      style={{ backgroundColor: `${bgColor}CC` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/ezpzlemonsquizy"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 ease-in-out ${
                isColorDark ? 'text-white hover:text-white/80' : 'text-gray-900 hover:text-gray-900/80'
              }`}
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Ridzz05"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 ease-in-out ${
                isColorDark ? 'text-white hover:text-white/80' : 'text-gray-900 hover:text-gray-900/80'
              }`}
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://portofolio-lake-omega.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 ease-in-out ${
                isColorDark ? 'text-white hover:text-white/80' : 'text-gray-900 hover:text-gray-900/80'
              }`}
            >
              <FaGlobe className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright Text */}
          <div className={`text-sm flex items-center transition-all duration-300 ease-in-out ${
            isColorDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span>Made with</span>
            <FaHeart className="w-4 h-4 mx-1 text-red-500" />
            <span>by</span>
            <a
              href="https://github.com/Ridzz05"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium"
            >
             Rizki Sigme Bet
            </a>
          </div>

          {/* Additional Info */}
          <p className={`text-xs ${
            isColorDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            © [iniTahunBerapaYa] All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

//Di navbar ada logo dan nama, di footer ada copyright dan social media hadehh.. awokawokaowk
//It's okay i think that's cool :v
