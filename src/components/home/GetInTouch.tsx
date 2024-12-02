import Link from "next/link";
import { withHttps } from "Utils";
import { Social } from "Constants";
import { OrderForm, Icon } from 'Components';

export const GetInTouch = () => {
    return (
        <div className="py-20" id="get-in-touch">
            <div className="container mx-auto px-5 md:px-0">
                <div className='flex flex-col md:flex-row justify-center md:justify-around gap-6'>
                    <div className="md:basis-2/4 w-full flex flex-col  gap-6">
                        <h2 className="w-fit bg-lavender bg-clip-text text-transparent font-bold text-4xl sm:text-6xl capitalize">get in touch</h2>

                        <h2 className="font-medium text-2xl text-secondary dark:text-white">Lets discuss your Project</h2>

                        <p className="text-primary font-normal md:[350px] lg:w-[600px] ">Interested in collaborating or have a project in mind? Let’s get in touch! I’m currently available to take on new landing page and single-page projects. Feel free to reach out to discuss your ideas and how we can bring them to life together.</p>

                        <Link href='mailto:farshadniakimia@gmail.com' className="font-medium text-secondary dark:text-white text-lg">Farshadniakimia@gmail.com</Link>

                        <ul className='flex items-center gap-6'>
                            {
                                Social.map((item) => (
                                    <li key={item.id} className='flex items-center rounded-full w-9 h-9'>
                                        <Link href={withHttps(item.href)} target='_blank'>
                                            <Icon iconName={item.name} size='xl' className='text-secondary dark:text-white hover:scale-110 duration-300 hover:text-purple dark:hover:text-purple' />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <OrderForm />
                </div>
            </div>
        </div>
    );
};