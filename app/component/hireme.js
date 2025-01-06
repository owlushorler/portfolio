// components/HireMe.js  

const services = [  
    { id: 1, name: "Website Development", isActive: true },  
    //{ id: 2, name: "iOS Development", isActive: false },  
    { id: 3, name: "Frontend Developer", isActive: false },  
    { id: 4, name: "Backend Development", isActive: false },  
    { id: 5, name: "Webflow Development", isActive: false },  
  ];  
  
  const HireMe = () => {  
    return (  
      <section  className="bg-black p-10">  
        <div className="container mx-auto text-center">  
          <h1 className="text-5xl font-bold text-white mb-4">Hire Me</h1>  
          <h2 className="text-lg text-gray-400 mb-8">Services</h2>  
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:justify-center">  
            {services.map((service) => (  
              <button  
                key={service.id}  
                className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${  
                  service.isActive  
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"  
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"  
                }`}  
              >  
                {service.name}  
              </button>  
            ))}  
          </div>  
        </div>  
      </section>  
    );  
  };  
  
  export default HireMe;