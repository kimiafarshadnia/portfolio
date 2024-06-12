import Link from "next/link";
import { Social } from "Constants";
import { Icon, ContactForm } from "Components";

export default function ContactMe() {
    return (
        <div className='dark:bg-darkMode dark:text-white'>
            <div className="container mx-auto px-5 md:px-0 py-[100px]">
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-around gap-6'>
                    <div className="md:basis-2/4 w-full flex flex-col  gap-6">
                        <h1 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize">Lets discuss your Project</h1>
                        <p className="text-primary font-normal md:[350px] lg:w-[600px] dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, mollitia sit incidunt exercitationem odit .</p>
                        <Link href='' className="font-bold text-secondary dark:text-white text-xl">FarshadniaKimia@gmail.com</Link>
                        <div>
                            <ul className='flex items-center gap-6'>
                                {
                                    Social.map((item) => (
                                        <li key={item.id} className=' hover:scale-110 duration-300 flex items-center justify-center rounded-full w-9 h-9'>
                                            <Link href={item.href}>
                                                <Icon iconName={item.name} size='xl' className='hover:bg-lavender p-2 rounded-lg text-[#FF6268]' />
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
