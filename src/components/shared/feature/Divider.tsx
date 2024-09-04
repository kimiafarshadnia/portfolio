export const Divider = () => {
    const textItems = [
        { text: "developer", visible: "md" },
        { text: "front-end", visible: "all" },
        { text: "front-end", visible: "all" },
        { text: "front-end", visible: "all" },
        { text: "front-end", visible: "lg" },
        { text: "front-end", visible: "lg" },
        { text: "developer", visible: "md" },
    ];

    return (
        <div className="relative" id="works">
            <div className="w-full h-[68px] md:h-[98px] bg-lavender"></div>
            <div className="w-full bg-darkMode dark:bg-white dark:text-black text-white text-xs sm:text-sm md:text-xl lg:text-2xl capitalize font-semibold h-[68px] md:h-[98px] -rotate-3 absolute top-[14px] md:top-[-5px] flex items-center justify-around px-5">
                {textItems.map(({ text, visible }, index) => (
                    <span
                        key={index}
                        className={`${visible === "all" ? "" : `hidden ${visible}:block`}`}
                    >
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};
