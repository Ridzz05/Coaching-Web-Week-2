import { Menu, Transition } from '@headlessui/react';
import { 
  CodeBracketIcon, 
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { FaInstagram, FaGithub } from 'react-icons/fa';

function Navbar({ bgColor }) {
  // Fungsi untuk menentukan apakah warna background gelap atau terang
  const isColorDark = (color) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness < 128;
  };

  // Tentukan warna teks berdasarkan brightness background
  const textColor = isColorDark(bgColor) ? 'text-white' : 'text-gray-900';
  const textHoverColor = isColorDark(bgColor) ? 'hover:text-gray-300' : 'hover:text-indigo-600';
  const menuItemHoverBg = isColorDark(bgColor) ? 'hover:bg-white/10' : 'hover:bg-black/10';

  return (
    <nav 
      className="fixed w-full top-0 z-50 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out"
      style={{ backgroundColor: `${bgColor}CC` }}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Tampilan Mobile Menu - Tetap di kiri */}
          <div className="flex items-center md:hidden">
            <Menu as="div" className="relative mr-4">
              {({ open }) => (
                <>
                  <Menu.Button 
                    className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} transition-all duration-300 hover:opacity-80`}
                    aria-label="Menu navigasi"
                  >
                    <span className="sr-only">Menu Navigasi</span>
                    <div className="w-6 h-5 flex flex-col justify-center items-center">
                      <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                        open ? 'rotate-45 translate-y-1' : '-translate-y-1'
                      }`}></span>
                      
                      <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                        open ? 'opacity-0' : 'opacity-100'
                      }`}></span>
                      
                      <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                        open ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                      }`}></span>
                    </div>
                  </Menu.Button>

                  <Transition
                    show={open}
                    as="div"
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-175 ease-in"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items 
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 backdrop-blur-sm ring-1 ring-black/5 focus:outline-none"
                      style={{ backgroundColor: `${bgColor}F0` }}
                      aria-label="Menu dropdown"
                    >
                      {['Instagram', 'Github', 'Portfolio'].map((item) => (
                        <Menu.Item key={item}>
                          {({ active }) => (
                            <a
                              href={item === 'Instagram' ? 'https://instagram.com/ezpzlemonsquizy' :
                                   item === 'Github' ? 'https://github.com/Ridzz05' :
                                   'https://portofolio-lake-omega.vercel.app'}
                              className={`${
                                active ? `bg-black/5 ${textColor}` : textColor
                              } flex px-4 py-2 text-sm items-center transition-all duration-300 hover:pl-6 group`}
                            >
                              {item === 'Instagram' && <FaInstagram className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />}
                              {item === 'Github' && <FaGithub className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />}
                              {item === 'Portfolio' && <GlobeAltIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />}
                              {item}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
          
          {/* Tampilan Desktop Menu */}
          <div className="hidden md:block ml-6">
            <div className="flex items-center space-x-6">
              {['Instagram', 'Github', 'Portfolio'].map((item) => (
                <a
                  key={item}
                  href={item === 'Instagram' ? 'https://instagram.com/ezpzlemonsquizy' :
                       item === 'Github' ? 'https://github.com/Ridzz05' :
                       'https://portofolio-lake-omega.vercel.app'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor} px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:opacity-80 group relative`}
                >
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                  {item === 'Instagram' && <FaInstagram className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />}
                  {item === 'Github' && <FaGithub className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />}
                  {item === 'Portfolio' && <GlobeAltIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />}
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;