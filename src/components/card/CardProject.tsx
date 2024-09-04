'use client'
import Link from "next/link";
import { Repo } from "Types";
import { Icon } from "Components";
import { withHttps } from "Utils";
import { faGlobe, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
    project: Repo;
}

export const CardProject = ({ project }: Props) => {

    return (

        <div className='w-full flex flex-col justify-between dark:bg-[#2C2C2C] rounded-lg shadow-lg h-[350px]'>
            <div className="h-[225px] flex-shrink-0">
                {/* <iframe src={project.homepage} className='w-full h-full rounded-tl-lg rounded-tr-lg'></iframe> */}
            </div>
            <div className="flex flex-col justify-start items-start gap-3 p-5 ">
                <div className="flex items-center justify-between w-full">
                    <span className="font-semibold text-secondary dark:text-white text-sm sm:text-lg">{project.name}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-primary dark:text-white text-xs sm:text-sm truncate overflow-hidden">{project.stargazers_count}</span>
                        <Icon iconName={faStar} className="text-yellow-400" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href={withHttps(project.html_url)} target="_blank">
                            <Icon iconName={faGithub} size="lg" className="hover:scale-110 duration-300" />
                        </Link>
                        {project.homepage && <Link href={withHttps(project.homepage)} target="_blank">
                            <Icon iconName={faGlobe} size="lg" className="hover:scale-110 duration-300" />
                        </Link>}
                    </div>

                    <Link href={`/projects/${project.name}`} className='w-fit bg-lavender text-white font-medium capitalize px-4 py-1 rounded-lg'>
                        view
                    </Link>
                </div>
            </div>
        </div>
    )
}