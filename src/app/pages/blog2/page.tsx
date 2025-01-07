import Image from "next/image";
import itimage from "../../../../public/home-page/itimage.jpg"
import Commentsection from "@/components/Commentsection";

export default function blog1() {
  return (
    <div>
       <div className="[Image] flex justify-center">
        <Image src={itimage} alt="Ai Image" height={300} width={600}></Image>
       </div>
       <div className="text-center">
        <p className="text-[23px] text-center ]">Top 5 IT Skills to Master in 2025</p>
        <p className="w-[600px] ml-[380px] text-[19px]">In today s fast-paced, technology-driven world, IT skills have become the cornerstone of modern workplaces. As businesses increasingly rely on digital solutions to streamline operations and drive innovation, expertise in areas such as coding, networking, and cloud management is more crucial than ever. Companies value employees who can develop and maintain software, ensure secure and efficient networks, and leverage cloud technologies to enhance scalability and flexibility. These skills not only boost productivity but also open the door to new opportunities for business growth. For professionals, mastering these IT competencies is essential to thrive in a competitive job market. By staying updated with the latest technological advancements and acquiring practical, in-demand skills, individuals can position themselves as indispensable assets in their organizations, ensuring long-term career success in an evolving digital landscape.</p>
       </div>
       <Commentsection/>
    </div>
  );
}