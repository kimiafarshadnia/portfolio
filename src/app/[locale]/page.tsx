import { Hero, Divider, Projects, About, Tools, GetInTouch } from "Components";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-16 md:gap-36 overflow-x-hidden xl:px-0 pt-20">
      <div className='absolute flex justify-center items-center top-2 right-[-10rem]'>
        <div className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-shadow1 opacity-50 blur-2xl relative animation1'></div>
      </div>

      <div className='absolute flex justify-center items-center left-[-15rem]'>
        <div className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-shadow2 opacity-50 blur-2xl relative animation1'></div>
      </div>

      <Hero />
      <Divider />
      <Projects />
      <About />
      <Tools />
      <GetInTouch />
    </div>
  );
}
