import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Blogs from "../components/Home/Blogs"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Blogs/>
    </div>
  );
}
