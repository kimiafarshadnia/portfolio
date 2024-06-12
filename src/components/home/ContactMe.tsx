import Link from "next/link"
import { ContactForm, Icon } from 'Components';
import { Social } from "Constants";

export const ContactMe = () => {

    return (
        <div className="container mx-auto px-5 md:px-0" id='contact-me'>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-6'>
                <div className="md:basis-2/4 w-full flex flex-col items-center justify-center text-center gap-6">
                    <h2 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize">contact me</h2>
                    <p className="text-primary font-normal md:[350px] lg:w-[600px] dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, mollitia sit incidunt exercitationem odit .</p>
                    <Link href='' className="font-bold text-secondary dark:text-white text-lg md:text-xl">Farshadniakimia@gmail.com</Link>
                    <div>
                        <ul className='flex items-center gap-6'>
                            {
                                Social.map((item) => (
                                    <li key={item.id} className=' hover:scale-110 duration-300 flex items-center justify-center rounded-full w-9 h-9'>
                                        <Link href={item.href} target='_blank'>
                                            <Icon iconName={item.name} size='xl' className='text-secondary dark:text-white' />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
               <ContactForm/>
            </div>
        </div>
    )
}