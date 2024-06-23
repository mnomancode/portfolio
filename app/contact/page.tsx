import { Meteors } from "../components/meteors";
import { Navigation } from "../components/nav";
import { AnimatedPin } from "./components/animated-pin";
import { TypewriterEffectSmoothDemo } from "./components/typewriter-text";

export default  function ContactPage() {



    return (
        
     
     
    <div className="relative pb-16 items-center justify-center"> 
         <Navigation />
        {/* <Meteors number={10}  /> */}

             <TypewriterEffectSmoothDemo  />
         <div className="pt-40 flex flex-wrap items-center justify-center">
                     <AnimatedPin
                        href={"https://github.com/noman9k"}
                        title={"Github"}
                        description={"Check out my Github profile"}
                     />
                        <AnimatedPin
                            href={"https://linkedin.com/in/noman9k"}
                            title={"LinkedIn"}
                            description={"Connect with me on LinkedIn"}
                        />
                        <AnimatedPin
                            href={"https://twitter.com/noman9k"}
                            title={"Twitter"}
                            description={"Follow me on Twitter"}    
                        /> 

                       


     
         </div>
     
        {/* <h1 className="text-3xl font-bold animate-slide-right  text-zinc-400 hover:text-zinc-100">Contact</h1> */}
        </div>
        );
        

}