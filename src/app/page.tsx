import { Hero, Divider, Project, Tools, Company, ContactMe, GetInTouch } from "Components";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-36">
      <div className='absolute flex justify-center items-center top-[5rem] right-[-25rem]'>
        <div className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-shadow1 opacity-50 blur-2xl relative overflow-x-hidden animation1'></div>
      </div>

      <div className='absolute flex justify-center items-center left-[-15rem]'>
        <div className='w-[700px] h-[700px] rounded-full bg-shadow2 opacity-50 blur-2xl relative overflow-x-hidden animation1'></div>
      </div>

      <Hero />
      <Divider />
      <Project />
      <Tools />
      <Company />
      <GetInTouch />
      <ContactMe />
    </div>
  );
}
