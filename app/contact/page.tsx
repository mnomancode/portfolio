import { Meteors } from "../components/meteors";
import { Navigation } from "../components/nav";
import { TypewriterEffectSmoothDemo } from "./components/typewriter-text";

export default  function ContactPage() {



    return (
        
     
     
     <div className=" flex flex-col items-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative  justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
         <Navigation />
         <TypewriterEffectSmoothDemo />
        <h1 className="text-3xl font-bold animate-slide-right  text-zinc-400 hover:text-zinc-100">Contact</h1>
        <Meteors number={10}  />
        </div>
        );
        

}