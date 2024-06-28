import Link from "next/link";
import { Project } from "Types";
import { Icon } from "Components";
import { withHttps } from "Utils";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
    project: Project;
}

export const CardProject = ({ project }: Props) => {
    return (
        <div className="w-[298px] flex justify-center rounded-lg bg-[#646464bf] dark:bg-[#000000bf] card">
            <span className='bg-lightMode dark:bg-darkMode'></span>
            <div className='relative z-10 w-full'>
                <div className='w-full flex flex-col gap-6'>
                   <div >
                   <img src='/images/react.svg' alt="image_project" className='w-full h-full z-10'/>
                   </div>
                    <div className="flex flex-col justify-start items-start gap-3 p-5 rounded-bl-lg rounded-br-lg">
                        <h2 className="text-primary dark:text-white text-xs sm:text-sm z-10">{project.category}</h2>
                        <h3 className="font-semibold text-secondary dark:text-white text-sm sm:text-lg z-10">{project.title}</h3>
                        <div className="flex items-center gap-4 z-10">
                            <Link href={withHttps(project.github)} target="_blank">
                                <Icon iconName={faGithub} size="lg" className="hover:scale-110 duration-300"/>
                            </Link>

                            <Link href={withHttps(project.link)} target="_blank">
                                <Icon iconName={faGlobe} size="lg" className="hover:scale-110 duration-300"/>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}