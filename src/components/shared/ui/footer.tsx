export const Footer = () => {

    return (
        <footer className='dark:bg-darkMode dark:text-white px-5 md:px-0'>
            <div className='container mx-auto flex flex-col gap-6'>
                <div className='bg-gradient-to-r from-[#C6C6C600] via-[#C6C6C6] to-[#C6C6C600] h-px'></div>
                <div className='w-full pb-6 flex flex-col-reverse md:flex-row justify-center items-center md:items-baseline md:justify-between gap-6 md:gap-0'>
                    <p>© {(new Date().getFullYear())} All rights reserved</p>
                    <div className='hidden md:flex flex-shrink-0'>
                        <img src="/images/logo.svg" alt="logo" className='w-10 h-10' />
                    </div>
                </div>
            </div>
        </footer>
    );
};
