"use client"
import Link from 'next/link';
// components/Navbar.js  
import { useState } from 'react';  

const Navbar = () => {  
  const [darkMode, setDarkMode] = useState(true);  

  return (  
    <nav className={`flex items-center justify-between p-4 bg-black ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>  
      <div className="text-lg font-bold">Ajewoleo Olushola</div>  
      <div className="flex space-x-6 px-10">  
        <Link href="/" className="hover:text-purple-500">Home</Link>  
        <Link href="/#Project" className="hover:text-purple-500">Projects</Link>  
       
        <Link href="/#Contact" className="hover:text-purple-500">Contact</Link>  
      </div>  
     {/* <div className="flex items-center space-x-2">  
        <button   
          onClick={() => setDarkMode(!darkMode)}   
          className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}  
        >  
          {darkMode ? '🌙' : '☀️'}
          </button> 
         <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full">HIRE ME &rarr;</button>  
      </div>  */}
    </nav>  
  );  
};  

export default Navbar;