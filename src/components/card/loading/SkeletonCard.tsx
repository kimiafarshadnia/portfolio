export const SkeletonCard = () => {
    return (
        <div className="w-full bg-white dark:bg-[#2B2B2B] rounded-lg shadow-lg h-[350px]">
            <div className="animate-pulse flex flex-col justify-between h-full">
                <div className="h-[225px] bg-gray-200 rounded-t-lg"></div>
                <div className="flex flex-col justify-start items-start gap-3 p-5 ">
                    <div className="flex items-center justify-between w-full">
                        <span className="h-5 bg-gray-200 w-[150px] rounded-full"></span>

                        <div className="rounded-full h-8 w-8 bg-gray-200"></div>

                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full h-8 w-8 bg-gray-200"></div>
                            <div className="rounded-full h-8 w-8 bg-gray-200"></div>
                        </div>

                        <div className='px-4 py-1 rounded-lg bg-gray-200 w-[100px] h-8'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
