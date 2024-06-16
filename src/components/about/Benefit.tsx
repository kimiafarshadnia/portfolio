export const Benefit = () => {
    return (
        <div className="basis-2/4 flex flex-col gap-6">
            <div className="bg-lavender pl-1 rounded-md">
                <div className="flex flex-col gap-4 shadow-lg p-5 sm:p-8 rounded-md bg-white dark:bg-[#2B2B2B]">
                    <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-lg sm:text-2xl capitalize">Responsive Web Design</h3>
                    <p>I create visually stunning and fully responsive websites that provide an optimal viewing experience across all devices. My designs are user-centric, ensuring a seamless and engaging interaction for all users.</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 shadow-lg p-5 sm:p-8 rounded-md bg-white dark:bg-[#2B2B2B]">
                <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-lg sm:text-2xl capitalize">Custom Web Solutions</h3>
                <p>I tailor web solutions to meet the specific needs of each client, from landing pages to full-scale web applications. My approach is collaborative, ensuring that every project aligns with your vision and business goals.</p>
            </div>

            <div className="flex flex-col gap-4 shadow-lg p-5 sm:p-8 rounded-md bg-white dark:bg-[#2B2B2B]">
                <h3 className="bg-lavender bg-clip-text text-transparent font-bold text-lg sm:text-2xl capitalize">Single-Page Applications (SPAs)</h3>
                <p>Using modern frameworks like React and Vue.js, I develop dynamic and efficient single-page applications. These SPAs are designed to offer a smooth and fast user experience, with minimal loading times and rich interactivity.</p>
            </div>
        </div>
    )
}
