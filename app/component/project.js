// components/Projects.js  

import Image from "next/image";
import cod from "../images/code.jpg"

const projects = [  
    { id: 1, date: "http://hconntrol.com.ng/", name: "H-Countrol Hotel", imgSrc: "https://i.ibb.co/Nm0NPR1/picture-of-h-control.png"  },  
    { id: 2, date: "https://ajeoluprints.com.ng/", name: "Ajeolu Printing Press", imgSrc: "https://i.ibb.co/2MZGb1K/ajewoluprint.png" }, 
    { id: 4, date: "https://danafrondend.vercel.app/", name: "Dana Recruitment Portal", imgSrc: "https://i.ibb.co/xXzz8Py/dana-recruition-portal.png" }, 
    { id: 3, date: "https://my-country-six.vercel.app/", name: " continents and their countries", imgSrc:"https://i.ibb.co/M5NxJy6/country-api.png" },  
  
   
  ];  
  
  const Projects = () => {  
    return (  
      <section id="Project" className="py-10 bg-gradient-to-b from-black to-purple-500">  
        <div className="container mx-auto text-center">  
          <h2 className="text-4xl font-bold text-white mb-10">My Projects</h2>  
          <div className="flex flex-row justify-center gap-5  flex-wrap">  
            {projects.map((project) => ( 
              <div key={project.id}  > 


              <div className="relative group">  
                <div className="rounded-full w-80 overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">  
                
                  <img src={project.imgSrc} alt="picture-of-h-control " className="h-60"
                  />
                </div>  
                {/*<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">  
                  <h3 className="text-xl text-white font-semibold" >{project.name}</h3>  
                  <span className="text-sm text-gray-300">{project.date}</span>  
                  <a href="#" className="mt-2 text-indigo-400 hover:underline">View Project</a>  
                </div> */} 
              </div>

               <div className="">  
                  <h3 className="text-xl text-white font-semibold" >{project.name}</h3>  
            
                  <a href={project.date}  target="_blank" className="mt-2 text-indigo-400 hover:underline">View Project</a>  
                </div>   
              </div> 
            ))}  
          </div>  
        </div>  
      </section>  
    );  
  };  
  
  export default Projects;