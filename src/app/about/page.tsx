export default function About() {
  return (
    <div className='dark:bg-darkMode dark:text-white'>
      <div className="container mx-auto py-[100px] px-5 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col gap-6 basis-2/4">
            <h1 className="text-3xl sm:text-4xl font-semibold">What I do?</h1>
            <p className="font-normal text-[#87909D] dark:text-white">I’m a front-end developer with 5 years of experience specializing in React and Next.js. Throughout my career, I have collaborated with various individuals and companies to create dynamic and user-friendly web applications. My passion lies in bringing innovative web solutions to life, ensuring each project exceeds client expectations.</p>
          </div>
          <div className="basis-2/4 flex flex-col gap-6">
            <div className="bg-lavender pl-1 rounded-md">
              <div className="flex flex-col gap-4 shadow-md p-8 rounded-md bg-white dark:bg-[#2B2B2B]">
                <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-2xl capitalize">Responsive Web Design</h3>
                <p>I create visually stunning and fully responsive websites that provide an optimal viewing experience across all devices. My designs are user-centric, ensuring a seamless and engaging interaction for all users.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 shadow-md p-8 rounded-md dark:bg-[#2B2B2B]">
              <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-2xl capitalize">Custom Web Solutions</h3>
              <p>I tailor web solutions to meet the specific needs of each client, from landing pages to full-scale web applications. My approach is collaborative, ensuring that every project aligns with your vision and business goals.</p>
            </div>

            <div className="flex flex-col gap-4 shadow-md p-8 rounded-md dark:bg-[#2B2B2B]">
              <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-2xl capitalize">Single-Page Applications (SPAs)</h3>
              <p>Using modern frameworks like React and Vue.js, I develop dynamic and efficient single-page applications. These SPAs are designed to offer a smooth and fast user experience, with minimal loading times and rich interactivity.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
