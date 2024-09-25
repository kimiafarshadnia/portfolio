export const Divider = () => {
    const textItems = [
        { text: "developer", visible: "all" },
        { text: "front-end", visible: "all" },
        { text: "front-end", visible: "all" },
        { text: "front-end", visible: "sm" },
        { text: "front-end", visible: "sm" },
        { text: "front-end", visible: "md" },
        { text: "developer", visible: "lg" },
    ];

    return (
        <div className="relative" id="works">
            <div className="w-full h-[68px] md:h-[98px] bg-lavender"></div>
            <div className="w-full bg-darkMode dark:bg-white dark:text-black text-white text-xs sm:text-sm md:text-xl lg:text-2xl capitalize font-semibold h-[68px] md:h-[98px] -rotate-3 absolute top-[14px] md:top-[-5px] flex items-center justify-around px-5">
                {textItems.map(({ text, visible }, index) => (
                    <div key={index} className={`w-full items-center justify-around ${visible === "all" ? "flex" : `hidden ${visible}:flex`}`}>
                        <span>
                            {text}
                        </span>
                        <img src="/images/star.webp" alt="star" className="w-5 h-5 md:w-10 md:h-10 animate-spin"/>
                    </div>
                ))}
            </div>
        </div>
    );
};
