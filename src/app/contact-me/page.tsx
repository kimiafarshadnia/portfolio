import Image from "next/image";

export default function ContactMe() {
  return (
    <div className="container mx-auto py-[100px]">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex flex-col gap-6 basis-2/4">
          <h1 className="text-4xl font-semibold">What I do?</h1>
          <p className="font-normal text-[#87909D] dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam tempora neque iusto. Praesentium, quam ab nisi provident inventore distinctio sed corporis aperiam accusamus reprehenderit sint dolor autem, neque laborum.</p>

          <button type="button" className="rounded-lg px-4 py-2 bg-lavender text-white w-fit">say hello</button>
        </div>
        <div className="basis-2/4 flex flex-col gap-6">
          <div className="bg-lavender pl-1 rounded-md">
            <div className="flex flex-col gap-4 shadow-md p-8 rounded-md bg-white dark:bg-[#2B2B2B]">
              <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-2xl capitalize">User Experience (UX)</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore voluptatibus debitis provident rem iste, aliquam necessitatibus asperiores non impedit sed cumque amet exercitationem nihil ullam saepe nulla corporis quibusdam.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 shadow-md p-8 rounded-md dark:bg-[#2B2B2B]">
            <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-2xl capitalize">User Experience (UX)</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore voluptatibus debitis provident rem iste, aliquam necessitatibus asperiores non impedit sed cumque amet exercitationem nihil ullam saepe nulla corporis quibusdam.</p>
          </div>

          <div className="flex flex-col gap-4 shadow-md p-8 rounded-md dark:bg-[#2B2B2B]">
            <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-2xl capitalize">User Experience (UX)</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore voluptatibus debitis provident rem iste, aliquam necessitatibus asperiores non impedit sed cumque amet exercitationem nihil ullam saepe nulla corporis quibusdam.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
