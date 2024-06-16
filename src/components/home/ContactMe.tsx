import Link from "next/link"
import { ContactForm, Icon } from 'Components';
import { Social } from "Constants";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
export const ContactMe = () => {

    return (
        <div className="container mx-auto px-5 md:px-0" id='contact-me'>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-6'>
                <div className="md:basis-2/4 w-full flex flex-col items-center justify-center text-center gap-6">
                    <h2 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize">contact me</h2>
                    <p className="text-primary font-normal md:[350px] lg:w-[600px] dark:text-white">Have a project in mind or just want to say hello? Feel free to reach out to me. I’m always open to discussing new ideas, creative projects, or opportunities to be part of your vision.</p>

                    {/* <div className="w-fit bg-lightMode dark:bg-darkMode text-secondary dark:text-white rounded-lg flex gap-2 items-center px-5 py-2">
                        <Icon iconName={faEnvelope} size="lg" className="" />
                        <Link href='mailto:farshadniakimia@gmail.com' className="">Farshadniakimia@gmail.com</Link>
                    </div> */}



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

                    <div className="w-fit bg-lightMode dark:bg-darkMode text-secondary dark:text-white rounded-lg flex gap-2 items-center px-5 py-2">
                        <Icon iconName={faLocationDot} size="lg" className="" />
                        <span className="capitalize">iran, tehran</span>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}