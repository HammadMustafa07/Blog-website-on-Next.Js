import Commentsection from "../../../components/Commentsection"

export default function About() {
  return (
    <div className="bg-[#d4d1cb] h-[547px] flex ">
      <div className="w-[700px] pl-[20px] pt-[20px] text-[24px]">
        <p>Welcome to our blog, where technology meets inspiration! At the heart of our platform is a passion for exploring the ever-evolving world of Artificial Intelligence and IT skills. We aim to empower learners, enthusiasts, and professionals with insightful articles, practical tips, and the latest industry trends. Whether you're here to stay ahead in your career or simply curious about the future of tech, our mission is to provide you with the knowledge and tools to thrive in the digital age.</p>
      </div>
      <Commentsection/>
    </div>

  );
}