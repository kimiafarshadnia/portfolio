import Link from "next/link"

export const ContactMe = () => {
    return (
        <div className="container mx-auto px-5 md:px-0">
            <div className="flex flex-col items-center justify-center text-center gap-6">
                <h2 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize">contact me</h2>
                <p className="text-primary font-normal md:w-[600px] dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, mollitia sit incidunt exercitationem odit .</p>

                <Link href='' className="font-bold">FarshadniaKimia@gmail.com</Link>

                <div>
                    
                </div>
            </div>
        </div>
    )
}