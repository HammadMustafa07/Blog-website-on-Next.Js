import Image from "next/image";
import Link from "next/link";
import ai from "../../../public/home-page/ai.jpg"
import image4 from "../../../public/home-page/image4.png"
import image5 from "../../../public/home-page/image5.jpg"
import itimage from "../../../public/home-page/itimage.jpg"

export default function Blogs() {
    return (
        <div>
            <div className="text-black text-[24px] text-center mt-[24px]">My Blogs</div>
            <div className="Blogs grid grid-cols-4 ml-[30px] mt-[40px] ">
                <div className="h-[550px] w-[600px]  col-span-2">
                    <Image src={ai} alt="AI image" height={300} width={559}></Image>
                    <p className="text-black text-[23px] pt-3">The Rise of Artificial Intelligence: Transforming <br /> Industries</p>
                    <p className="text-black text-[18px]">
                        Artificial Intelligence is reshaping how businesses operate, from automation to advanced data analytics.
                        Discover how AI is creating <br /> smarter solutions across healthcare, finance, and education.
                    </p>
                    <Link className="relative top-2 text-blue-600" href={"/pages/blog1"}>See More</Link>
                </div>
                {/* <div className="h-[350px] w-[300px] bg-blue-500"></div> */}
                <div className="h-[420px] w-[300px]">
                    <Image src={image4} alt="skills" height={340} width={340}></Image>
                    <p className="text-black text-[23px]">Top 5 IT Skills to Master in 2025</p>
                    <p className="text-[18px]">The IT industry is evolving rapidly—do you have the skills to keep up?
                        From cloud computing to cybersecurity, learn the must-have skills for a thriving career.</p>
                    <Link className="relative top-2 text-blue-600" href={"/pages/blog2"}>See More</Link>
                </div>
                <div className="h-[420px] w-[300px]">
                    <Image src={image5} alt="ai" height={350} width={300}></Image>
                    <p className="text-black text-[23px]">AI-Powered Tools: Revolutionizing Productivity</p>
                    <p className="text-[18px]">Boost your efficiency with AI tools designed for developers, designers, and more.
                        Discover how automation and machine learning are optimizing workflows.</p>
                    <Link className="relative top-2 text-blue-600" href={"/pages/blog1"}>See More</Link>
                </div>
            </div>
            <div className="Blogs grid grid-cols-4 ml-[30px] mt-[40px]">
                <div className="h-[550px] w-[600px]  col-span-2">
                    <Image src={itimage} alt="AI image" height={300} width={559}></Image>
                    <p className="text-black text-[23px] pt-3">How IT Skills are Shaping the Modern Workplace</p>
                    <p className="text-black text-[18px]">
                        IT skills are the foundation of today's tech-driven work environments. <br />
                        Learn how companies value expertise in coding, networking, and cloud management.
                        Equip yourself with practical skills to thrive in a <br /> technology-first world.
                    </p>
                    <Link className="relative top-2 text-blue-600" href={"/pages/blog2"}>See More</Link>
                </div>
                {/* <div className="h-[350px] w-[300px] bg-blue-500"></div> */}
                <div className="h-[420px] w-[300px]">
                    <Image src={image4} alt="skills" height={340} width={340}></Image>
                    <p className="text-black text-[23px]">Ethics in Artificial Intelligence: A Double-Edged Sword</p>
                    <p className="text-[18px]">AI offers groundbreaking benefits but comes with ethical challenges.
                        Understand the implications of bias, data privacy</p>
                    <Link className="relative top-2 text-blue-600" href={"/pages/blog1"}>See More</Link>
                </div>
                <div className="h-[420px] w-[300px]">
                    <Image src={image5} alt="ai" height={350} width={300}></Image>
                    <p className="text-black text-[23px]"> Cloud Computing: The Backbone of Modern IT</p>
                    <p className="text-[18px]">Cloud technologies are powering innovation across industries.
                        Explore how platforms like AWS, Azure, and Google Cloud dominate the IT landscape.</p>
                    <Link className="relative top-2 text-blue-600" href={"#"}>See More</Link>
                </div>
            </div>

        </div>
    );
}