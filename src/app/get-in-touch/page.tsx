import { OrderForm } from "Components";

export default function GetInTouch() {
    return (
        <div className="relative flex flex-col gap-16 md:gap-36 overflow-hidden">
            <div className='absolute flex justify-center items-center top-[5rem] right-[-15rem]'>
                <div className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-shadow1 opacity-50 blur-2xl relative animation1'></div>
            </div>

            <div className='absolute flex justify-center items-center left-[-15rem]'>
                <div className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-shadow2 opacity-50 blur-2xl relative animation1'></div>
            </div>
            <div className='bg-white dark:bg-darkMode dark:text-white '>
                <div className="container mx-auto px-5 md:px-0 py-[100px]">
                    <div className='flex flex-col md:flex-row items-center justify-center md:justify-around gap-6'>
                        <div className="md:basis-2/4 w-full flex flex-col  gap-6">
                            <h1 className="bg-lavender bg-clip-text text-transparent font-bold text-4xl sm:text-6xl  md:text-7xl capitalize">get in touch</h1>

                            <h2 className="font-medium text-2xl text-secondary dark:text-white">Lets discuss your Project</h2>

                            <p className="text-primary font-normal md:[350px] lg:w-[600px] ">Interested in collaborating or have a project in mind? Let’s get in touch! I’m currently available to take on new landing page and single-page projects. Feel free to reach out to discuss your ideas and how we can bring them to life together.</p>
                        </div>
                        <OrderForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
