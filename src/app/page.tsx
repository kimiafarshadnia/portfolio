import { Hero, Divider, Project, Tools, Company, ContactMe, GetInTouch } from "Components";

export default function Home() {
  return (
    <div className="bg-white dark:bg-darkMode dark:text-white flex flex-col gap-20 md:gap-36">
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
