import { AboutMe, Benefit } from "Components";

export const About = () => {
  return (
    <div className='bg-white dark:bg-[#2B2B2B]' id='about'>
      <div className="container mx-auto py-[100px] px-5 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center">
          <AboutMe />
          <Benefit />
        </div>
      </div>
    </div>
  );
}