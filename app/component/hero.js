// components/Hero.js  

const Hero = () => {  
    return (  
      <div className="relative flex items-center justify-center h-48 bg-black text-white overflow-hidden">  
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }} />  
        <div className="relative z-10 text-center">  
          <h1 className="text-6xl font-bold mb-4">Follow me</h1>  
          <div className="flex justify-center space-x-4">  
            {/* Social links */}  
            <a href="#" className="text-2xl hover:text-pink-500">  
              <i className="fab fa-twitter"></i>  
            </a>  
            <a href="#" className="text-2xl hover:text-pink-500">  
              <i className="fab fa-behance"></i>  
            </a>  
            <a href="#" className="text-2xl hover:text-pink-500">  
              <i className="fab fa-discord"></i>  
            </a>  
          </div>  
        </div>  
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">  
          <a href="#portfolio" className="text-white text-lg">  
            <span className="mr-2">←</span>Ajewole Olushola 
          </a>  
        </div>  
      </div>  
    );  
  };  
  
  export default Hero;