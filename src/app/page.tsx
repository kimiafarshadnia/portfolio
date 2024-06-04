import { Hero, Divider, Project, Tools, Company, ContactMe } from "../components";

export default function Home() {
  return (
    <div className="dark:bg-[#161513] dark:text-white flex flex-col gap-36">
      <Hero />
      <Divider />
      <Project />
      <Tools />
      <Company />
      <ContactMe />
    </div>
  );
}
