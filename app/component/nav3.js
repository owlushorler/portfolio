import Link from 'next/link';  

const Navbar2 = () => {  
  return (  
    <nav className="bg-black p-4">  
      <div className="container mx-auto flex justify-center">  
        <ul className="flex space-x-8 text-white">  
          <li>  
            <Link href="/backend">BACK END</Link>  
          </li>  
          <li>  
            <Link href="/webflow">WEBFLOW</Link>  
          </li>  
          <li>  
            <Link href="/fullstack">FULL STACK</Link>  
          </li>  
          <li>  
            <Link href="/frontend" className="font-bold">FRONT END</Link>  
          </li>  
          <li>  
            <Link href="/back">BACK</Link>  
          </li>  
        </ul>  
      </div>  
    </nav>  
  );  
};  

export default Navbar2;