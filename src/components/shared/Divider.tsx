export const Divider = () => {
    return (

        <div className="relative">
            <div className="w-full h-[68px] md:h-[98px] bg-lavender"></div>
            <div className="w-full bg-[#2A2A2A] dark:bg-white dark:text-black text-white text-2xl capitalize font-semibold h-[68px] md:h-[98px] -rotate-3 absolute top-[-12px] md:top-[-5px] flex items-center justify-around px-5">
                <span className="hidden md:block">developer</span>
                <span>front-end</span>
                <span>front-end</span>
                <span className="hidden sm:block">front-end</span>
                <span className="hidden md:block">front-end</span>
                <span className="hidden md:block">front-end</span>
                <span className="hidden md:block">developer</span>
            </div>
        </div>
    )
}