import Image from "next/image";
import heroimagebg from "../../../public/home-page/heroimagebg.png"

export default function Hero() {
    return (
        <div className="h-[400px] bg-[#031C32] flex ">
             <div className="h-[400px] w-[400px] ">
                <p className="text-white text-[24px] pt-[84px] md:pl-[84px] pl-[30px] pr-[10px]">Explore the future of technology with insights into AI and essential IT skills. Empower your journey in  the digital age one blog at a time!</p>
             </div>
             <div>
                <Image className="md:ml-[200px] md:mt-[30px] sm::visible hidden md:block" src={heroimagebg} alt="heroimage" height={250} width={350}></Image>
             </div>
        </div>
    );
}