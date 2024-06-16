export const Company = () => {
    return (
        <div className="bg-lightMode dark:bg-[#2B2B2B] py-[100px]">
            <div className="container mx-auto px-5 md:px-0">
                <div className="flex flex-col gap-6">
                    <h2 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize">Comapnies I’ve worked with</h2>
                    <p className="text-primary font-normal md:w-[600px]">Throughout my career, I’ve had the privilege to work with a diverse range of companies, contributing to their success by delivering high-quality front-end solutions.</p>

                    <div className='flex flex-col gap-4'>
                        <h3 className='text-secondary dark:text-white text-2xl sm:text-3xl font-medium capitalize'>Daya Soft</h3>
                        <p className='font-normal text-sm sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias ab velit minus vitae voluptatibus consequatur eligendi delectus aliquid quaerat autem ex eaque saepe placeat corrupti, doloremque blanditiis porro iure!</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h3 className='text-secondary dark:text-white text-2xl sm:text-3xl font-medium capitalize'>Anoosh</h3>
                        <p className='font-normal text-sm sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias ab velit minus vitae voluptatibus consequatur eligendi delectus aliquid quaerat autem ex eaque saepe placeat corrupti, doloremque blanditiis porro iure!</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h3 className='text-secondary dark:text-white text-2xl sm:text-3xl font-medium capitalize'>Nasim Pooya</h3>
                        <p className='font-normal text-sm sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias ab velit minus vitae voluptatibus consequatur eligendi delectus aliquid quaerat autem ex eaque saepe placeat corrupti, doloremque blanditiis porro iure!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}