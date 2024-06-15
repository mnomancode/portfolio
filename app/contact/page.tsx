import { Meteors } from "../components/meteors";
import { Navigation } from "../components/nav";
import { AnimatedPin } from "./components/animated-pin";
import { TypewriterEffectSmoothDemo } from "./components/typewriter-text";

export default  function ContactPage() {



    return (
        
     
     
     <div className=" flex flex-col  items-center justify-start bg-black/[0.96] antialiased bg-grid-white/[0.02] w-screen h-screen  bg-gradient-to-tl from-black via-zinc-600/20 to-black bg-black">
    {/* // <div className=" grid items-center w-screen pb-16 bg-black/[0.96] antialiased bg-grid-white/[0.02]  overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"> */}
         <Navigation />
        <Meteors number={10}  />

             <TypewriterEffectSmoothDemo  />
         <div className="flex flex-col sm:flex-row ">
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