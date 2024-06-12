import Link from "next/link";
import { Social } from "Constants";
import { Icon, ContactForm } from "Components";

export default function ContactMe() {
    return (
        <div className='dark:bg-darkMode dark:text-white'>
            <div className="container mx-auto px-5 md:px-0 py-[100px]">
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-around gap-6'>
                    <div className="md:basis-2/4 w-full flex flex-col  gap-6">
                        <h1 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl  sm:text-6xl capitalize">get in touch</h1>
                        
                        <h2 className="font-medium text-lg sm:text-2xl text-secondary dark:text-white">Lets discuss your Project</h2>

                        <p className="text-primary font-normal md:[350px] lg:w-[600px] ">Interested in collaborating or have a project in mind? Let's get in touch! I'm currently available to take on new landing page and single-page projects. Feel free to reach out to discuss your ideas and how we can bring them to life together.</p>

                        <Link href='mailto:farshadniakimia@gmail.com' className="font-bold text-secondary dark:text-white text-xl">FarshadniaKimia@gmail.com</Link>

                        <div>
                            <ul className='flex items-center gap-6'>
                                {
                                    Social.map((item) => (
                                        <li key={item.id} className=' hover:scale-110 duration-300 flex items-center justify-center rounded-full w-9 h-9'>
                                            <Link href={item.href}>
                                                <Icon iconName={item.name} size='xl' className='hover:bg-lavender p-2 rounded-lg dark:text-white text-secondary hover:text-white' />
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
