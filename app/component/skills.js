// components/Skills.js  

const skillsData = [  
    { name: 'CSS', level: 8, icon: 'css' },  
    { name: 'Tailwind', level: 7, icon: 'tailwind' },  
    { name: 'JavaScript', level: 9, icon: 'js' },   
    { name: 'Laravel', level: 8, icon: 'laravel' },  
    { name: 'React', level: 10, icon: 'react' },  
    { name: 'Ruby/Rails', level: 7, icon: 'ruby' },  
    { name: 'Node.js', level: 10, icon: 'node' }, 
    { name: 'Next.js', level: 10, icon: 'Next' }, 
    { name: 'Nest,js', level: 10, icon: 'nest' }, 
    { name: 'express', level: 10, icon: 'express' },     
  ];  
  
  const Skills = () => {  
    return (  
      <section className="bg-black py-10 px-20 ">  
        <div className="container mx-auto text-center ">  
          <h2 className="text-4xl font-bold text-white mb-8">My Skills <span className="text-pink-500">↓</span></h2>  
          <div className="space-y-6 flex flex-col sm:gap-5 sm:grid sm:grid-cols-2">  
            {skillsData.map(skill => (  
              <div key={skill.name} className="flex justify-between items-center">  
                <div className="flex items-center space-x-2">  
                  <span className="text-lg text-white">{skill.name}</span>  
                </div>  
                <div className="w-1/2 bg-gray-600 h-2 rounded-full">  
                  <div  
                    className={`h-full rounded-full bg-pink-600`}  
                    style={{ width: `${(skill.level / 10) * 100}%` }}  
                  ></div>  
                </div>  
               {/* <span className="text-lg text-white">{'●'.repeat(skill.level)}{'○'.repeat(10 - skill.level)}</span>  */}
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
    );  
  };  
  
  export default Skills;