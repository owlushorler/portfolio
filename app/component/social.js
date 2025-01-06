// components/SocialIcons.js  

const SocialIcons = () => {  
    return (  
      <div id="Contact" className="flex justify-center space-x-6 p-4 bg-black">  
        <a href="https://linkedin.com/in/olushola-ajewole-4a427916a"  target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 hover:bg-gray-700 transition duration-300">  
          <span className="text-white text-lg">LI</span> {/* Replace with actual X icon */}  
        </a>  
        <a href="https://github.com/owlushorler?tab=repositories"  target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 hover:bg-gray-700 transition duration-300">  
          <span className="text-white text-lg">Git</span> {/* Replace with actual Facebook icon */}  
        </a>  
        <a href="https://x.com/owlushorler" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 hover:bg-gray-700 transition duration-300">  
          <span className="text-white text-lg">x</span> {/* Replace with actual Behance icon */}  
        </a>  
       
      </div>  
    );  
  };  
  
  export default SocialIcons;