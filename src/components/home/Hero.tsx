export const Hero = () => {
    return (
        <div className="container mx-auto px-5 md:px-0">
            <div className="flex flex-col gap-12 items-center justify-center text-center">
                <img src="/images/me.png" alt="me" />
                <h1 className="text-5xl sm:text-6xl font-bold bg-lavender bg-clip-text text-transparent">Hello, I’m Kimia Farshadnia</h1>
                <p className="md:w-[500px] text-primary md:text-lg font-normal text-center dark:text-white">I’m a Freelance <span className="text-secondary dark:text-white">Developer</span> based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button type="button" className="w-[223px] bg-lavender rounded-s-full rounded-e-full text-white font-semibold py-3 px-6">Get in Touch</button>

                    <button type="button" className="w-[223px] bg-white rounded-s-full rounded-e-full text-secondary border border-secondary font-semibold py-3 px-6">View all works</button>
                </div>
            </div>
        </div>
    )
}