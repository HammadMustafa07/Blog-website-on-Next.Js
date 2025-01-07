

export default function About() {
  return (
    <div className="h-[547px] w-[] bg-[#D4D1CB]">
     <div className="flex flex-col gap-5 pl-[20px] pt-[40px]">
      <input className="h-[40px] w-[180px] border-black border-[2px] rounded-[6px]" type="text" placeholder="Name" />
      <input className="h-[40px] w-[280px] border-black border-[2px] rounded-[6px]" type="text" placeholder="Email" />
      <input className="h-[40px] w-[180px] border-black border-[2px] rounded-[6px]" type="text" placeholder="Number" />
      <button className="h-[40px] w-[100px] bg-blue-400 border-[2px] border-black hover:bg-blue-500 active:bg-blue-700 rounded-[6px]">Send</button>
     </div>
    </div>

  );
}