import React, { useState, Fragment } from 'react';
import { Menu, Transition, Dialog } from '@headlessui/react';
import { ChevronUpIcon, UserCircleIcon, CodeBracketIcon, PaintBrushIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import Footer from './Footer';

// Komponen Counter
function Counter({ count, onCounterClick, bgColor, isColorDark }) {
  return (
    <button 
      className={`inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md focus:outline-none transition-all duration-300 hover:opacity-90 active:scale-98 ${
        isColorDark ? 'text-gray-900 bg-white/90' : 'text-white bg-gray-900/90'
      }`}
      onClick={onCounterClick}
    >
      <ChevronUpIcon className="w-5 h-5 mr-2 transition-transform group-hover:scale-105" />
      Change Counter {count} times clicked
    </button>
  );
}

// Komponen Identity
function IdentityCard({ bgColor, isColorDark }) {
  return (
    <div 
      className="w-full p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl backdrop-blur-sm relative overflow-hidden group"
      style={{ 
        backgroundColor: `${bgColor}CC`,
        color: isColorDark ? 'white' : 'rgb(17, 24, 39)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      <div className="relative">
        <div className="flex items-center mb-4">
          <UserCircleIcon className={`w-6 h-6 mr-2 ${isColorDark ? 'text-white' : 'text-gray-900'}`} />
          <h1 className="text-2xl font-bold">My Identity</h1>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className={`w-1.5 h-1.5 rounded-full mr-3 ${isColorDark ? 'bg-white' : 'bg-gray-900'}`}></span>
            <span className="font-medium transition-transform hover:translate-x-2">M. Rizki Algipari</span>
          </li>
          <li className="flex items-center">
            <span className={`w-1.5 h-1.5 rounded-full mr-3 ${isColorDark ? 'bg-white' : 'bg-gray-900'}`}></span>
            <span className="font-medium transition-transform hover:translate-x-2">2428240069</span>
          </li>
          <li className="flex items-center">
            <span className={`w-1.5 h-1.5 rounded-full mr-3 ${isColorDark ? 'bg-white' : 'bg-gray-900'}`}></span>
            <a 
              href="https://github.com/Ridzz05" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center transition-transform hover:translate-x-2 ${
                isColorDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'
              }`}
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              My Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Komponen Form input
function InputForm({ inputValue, onInputChange, onSubmit, bgColor, isColorDark }) {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input 
        type="text" 
        value={inputValue}
        onChange={onInputChange}
        placeholder="Masukkan nama Anda"
        className={`w-full px-4 py-2 border rounded-md focus:outline-none transition-all duration-300 backdrop-blur-sm ${
          isColorDark 
            ? 'bg-white/10 border-white/20 text-white placeholder-gray-300 focus:border-white/40' 
            : 'bg-black/10 border-black/20 text-gray-900 placeholder-gray-600 focus:border-black/40'
        }`}
      />
      <button 
        type="submit" 
        className={`w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:opacity-90 active:scale-98 ${
          isColorDark ? 'bg-white/90 text-gray-900' : 'bg-gray-900/90 text-white'
        }`}
      >
        Submit
      </button>
    </form>
  );
}

// Komponen ColorButton
function ColorButton({ onColorChange, bgColor, isColorDark }) {
  return (
    <button 
      className={`inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:opacity-90 active:scale-98 ${
        isColorDark ? 'bg-white/90 text-gray-900' : 'bg-gray-900/90 text-white'
      }`}
      onClick={onColorChange}
    >
      <PaintBrushIcon className="w-5 h-5 mr-2 transition-transform group-hover:scale-105" />
      Warna background random
    </button>
  );
}

// Komponen Alert Dialog
function AlertDialog({ isOpen, closeModal, message, bgColor, isColorDark }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex items-center text-lg font-medium leading-6 text-gray-900"
                >
                  <ExclamationTriangleIcon className="h-6 w-6 text-indigo-600 mr-2" />
                  Pesan
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {message}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    OK
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// Komponen Utama App
function App() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Fungsi untuk menentukan apakah warna gelap atau terang
  const isColorDark = (color) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness < 128;
  };

  const handleCounterClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    document.title = `${newCount} kali diklik`;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setAlertMessage(`Hello ${inputValue}!`);
      setIsAlertOpen(true);
      setInputValue('');
    } else {
      setAlertMessage('Nama lu siapa bang?');
      setIsAlertOpen(true);
    }
  };

  const handleRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <div className="app-container transition-all duration-300 ease-in-out">
      <Navbar bgColor={bgColor} />
      <div 
        className="min-h-screen pt-20 p-8 transition-all duration-300 ease-in-out" 
        style={{ backgroundColor: bgColor }}
      >
        <div className="max-w-md mx-auto space-y-6">
          <div 
            className="p-6 rounded-xl shadow-xl space-y-6 backdrop-blur-sm transition-all duration-300 ease-in-out"
            style={{ backgroundColor: `${bgColor}99` }}
          >
            <Counter 
              count={clickCount} 
              onCounterClick={handleCounterClick}
              bgColor={bgColor}
              isColorDark={isColorDark(bgColor)}
            />

            <IdentityCard 
              bgColor={bgColor}
              isColorDark={isColorDark(bgColor)}
            />

            <InputForm 
              inputValue={inputValue}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              bgColor={bgColor}
              isColorDark={isColorDark(bgColor)}
            />
            
            <ColorButton 
              onColorChange={handleRandomColor}
              bgColor={bgColor}
              isColorDark={isColorDark(bgColor)}
            />
          </div>
        </div>

        <Footer 
          bgColor={bgColor}
          isColorDark={isColorDark(bgColor)}
        />

        <AlertDialog 
          isOpen={isAlertOpen}
          closeModal={closeAlert}
          message={alertMessage}
          bgColor={bgColor}
          isColorDark={isColorDark(bgColor)}
        />
      </div>
    </div>
  );
}

export default App;