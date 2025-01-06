// pages/index.js
"use client"  
export default function Homee() {  
    return (  
      <div id="nav"  className="flex items-center justify-center h-60 bg-gradient-to-r from-black via-gray-800 to-blue-950 text-white">  
        <div className="max-w-4xl text-center p-6">  
          <h1 className="text-5xl font-bold mb-4">Ajewole Olushola</h1>  
          <h2 className="text-2xl mb-4">FULL-STACK WEB DEVELOPER</h2>  
          <p className="mb-6">  
            I’m a full-stack web developer .  
          </p>  
          <a   
            href="https://eu.docs.wps.com/module/common/loadPlatform/?sa=S5&st=1&sid=cIE3i-t_hAeO8z7sG&v=v2"   
            className="inline-block bg-pink-600 text-white rounded-lg px-6 py-3 transition duration-300 hover:bg-pink-700"  
            download  
          >  
            DOWNLOAD CV  
          </a>  
        </div>  
      </div>  
    );  
  }