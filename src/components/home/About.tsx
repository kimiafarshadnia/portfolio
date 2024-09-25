import { AboutMe, Benefit } from "Components";

export const About = () => {
  return (
    <div className='relative' id='about'>
      <div className='absolute flex justify-center items-center top-[-20rem] left-[-5rem] -z-50'>
        <div className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-shadow1 opacity-50 blur-2xl relative animation1'></div>
      </div>
      <div className="container mx-auto py-[100px] px-5 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
          <AboutMe />
          <Benefit />
        </div>
      </div>
      <div className='absolute flex justify-center items-center top-[15rem] right-[-5rem] -z-50'>
        <div className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-shadow2 opacity-50 blur-2xl relative animation1'></div>
      </div>
    </div>
  );
}