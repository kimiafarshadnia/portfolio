import { AboutMe, Benefit } from "Components";

export default function About() {
  return (
    <div className='bg-white dark:bg-darkMode dark:text-white'>
      <div className="container mx-auto py-[100px] px-5 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <AboutMe />
          <Benefit />
        </div>
      </div>
    </div>
  );
}
