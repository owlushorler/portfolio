import Image from "next/image";
import Navbar from "./component/nav";
import Homee from "./component/nav2";
import Navbar2 from "./component/nav3";
import AboutMe from "./component/about";
import Skills from "./component/skills";
import Projects from "./component/project";
import HireMe from "./component/hireme";
import Hero from "./component/hero";
import SocialIcons from "./component/social";
export default function Home() {
  return (
    <div>
      <Navbar  />
         
      <AboutMe/>
      <Skills/>
      <Projects />
      <HireMe/>
      <Hero/>
      <  SocialIcons/>


      
    </div>
  );
}
