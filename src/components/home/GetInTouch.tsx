import Link from "next/link";
import { Icon } from "Components";
import { Tooltip } from "@mui/material";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export const GetInTouch = () => {
    return (
        <div className='container mx-auto px-5 md:px-0 mb-5 relative'>
            <div className="relative sm:h-[350px] lg:h-[450px] bg-lavender text-center text-white rounded-2xl p-5 sm:p-10 flex flex-col justify-center items-center gap-6">
                <div className='relative -top-10  sm:-top-24 lg:-top-36 bg-white dark:bg-darkMode text-darkMode dark:text-white flex items-center justify-center sm:text-xl gap-2 px-5 py-4 sm:w-[350px] text-center rounded-2xl'>
                    <Icon iconName={faRocket} size='lg' className='text-darkMode dark:text-white' />
                    <span className="capitalize font-semibold">get in touch</span>
                </div>

                <h4 className="text-white dark:text-darkMode text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize">Lets discuss your Project</h4>

                <Tooltip title="Discuss Your Project">
                    <Link href={'/get-in-touch'}>
                        <button type="button" className="w-fit xl:w-[223px] text-xs sm:text-sm xl:text-base rounded-s-full rounded-e-full border border-secondary dark:border-black font-semibold text-black py-2 xl:py-3 px-6 transition-all duration-500 bg-[#FFFFFF1A] hover:bg-[#FFFFFF4D]">
                            get in touch
                        </button>
                    </Link>
                </Tooltip>

            </div>
        </div>
    );
};