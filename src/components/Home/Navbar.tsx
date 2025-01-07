import Link from "next/link";

export default function Header() {
    return (
        <div className="md:h-[60px] bg-[#051a2c] md:flex  md:border-b-[2px] md:border-gray-400 sm:flex sm:justify-between m-auto sm:w-full ">
            <div className="logo md:m-auto h-[60px] w-[140px] flex justify-center items-center">
                <p className="font-sans font-bold text-[23px] text-gray-200">Get<span className="text-white">Better</span></p>
            </div>
            <div className="pages-link md:m-auto h-[60px] md:w-[400px] ml-3    flex gap-4 md:justify-evenly items-center">
                <Link className="text-[18px] text-gray-300 " href={"/"}>Home</Link>
                <Link className="text-[18px] text-gray-300" href={"/pages/about"}>About</Link>
                <Link className="text-[18px] text-gray-300" href={"/pages/contact"}>Contact</Link>
            </div>
        </div>
    );
}
