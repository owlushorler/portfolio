// components/AboutMe.js  
import cod from "../images/code.jpg"
import Image from "next/image";

const AboutMe = () => {  
    return (  

      <section className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden"> 
         
        <div className="absolute inset-0">  
          <Image   
            src={cod}  
            alt="Background"   
            className="w-full h-full object-cover opacity-30"  
          />  
        </div>  
        <div className="relative z-10 text-white text-center p-8"> 
        <div className="flex items-center justify-center h-60  text-white">  
        <div className="max-w-4xl text-center p-6">  
          <h1 className="text-5xl font-bold mb-4">Ajewole Olushola</h1>  
          <h2 className="text-2xl mb-4">FULL-STACK WEB DEVELOPER</h2>  
          <p className="mb-6">  
            I’m a full-stack web developer .  
          </p> 
          <div className=" m-2" >
          <a   
            href="https://eu.docs.wps.com/module/common/loadPlatform/?sa=S5&st=1&sid=cIE3i-t_hAeO8z7sG&v=v2" 
            target="_blank"  
            className="inline-block bg-pink-600 text-white rounded-lg px-6 py-3 transition duration-300 hover:bg-pink-700"  
            download  
          >  
            DOWNLOAD CV  
          </a>  
          <a   
            href="https://linkedin.com/in/olushola-ajewole-4a427916a"
            target="_blank"
            className="inline-block bg-pink-600 m-4 text-white rounded-lg px-6 py-3 transition duration-300 hover:bg-pink-700"  
            download  
          >  
            LINKEDIN 
          </a> 
          <a   
            href="https://github.com/owlushorler?tab=repositories"   
            target="_blank"  
            className="inline-block bg-pink-600 text-white rounded-lg px-6 py-3 transition duration-300 hover:bg-pink-700"  
            download  
          >  
            GITHUB 
          </a> 
          </div> 
        </div>  
      </div>  
      <div className=" m-9">
          <h1 className="text-6xl font-bold mb-4">About me <span className="text-pink-500">↓</span></h1>  
          <p className="mb-8 text-lg">  
          a passionate full-stack web developer skilled in both front-end and back-end technologies. My journey began with HTML and CSS, evolving into proficiency in JavaScript, React, Node.js, and databases like MongoDB and MySQL.
          </p>  
          <div className="mb-4">  
            <span className="text-3xl font-bold">200+</span> Projects Complete  
          </div>  
          <div className="mb-4">  
            <span className="text-3xl font-bold">2.5+</span> Years Experience  
          </div>  
          </div> 
        </div>  
      </section>  
    );  
  };  
  
  export default AboutMe;