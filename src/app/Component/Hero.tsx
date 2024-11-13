import Image from "next/image";


function Hero(){
    return(
        <div className="bg-black height-72 flex justify-around  ">
            {/* left side */}
            <div className="pt-16 ml-44">
            <Image src={"/390+ Free Mockups.png"} width={500} height={500} alt="textimage"className="mt-5"></Image>  
            
            <Image src={"/Frame 32.png"} width={500} height={500} alt="textimage "className="pt-11"></Image>  

            
            <Image src={"/Here is the best 100+ Mockup collection for your next project.png"} width={500} height={500} alt="textimage"className="pt-11"></Image>  
            
            
            
            
            </div>

            {/* right side */}

            <div>
            <Image src={"/Group 7.png"} width={800} height={4000} alt="textimage"></Image>  

            </div>
            
        </div>
    )
}

export default Hero