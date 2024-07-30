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

        <div className='w-full flex flex-col dark:bg-[#2C2C2C] rounded-lg shadow-lg'>
            <div className="h-[225px] flex-shrink-0">
                <img src={project.image} alt={project.title} className='w-full h-full rounded-tl-lg rounded-tr-lg' />
            </div>
            <div className="flex flex-col justify-start items-start gap-3 p-5 ">
                <h2 className="text-primary dark:text-white text-xs sm:text-sm">{project.category}</h2>
                <h3 className="font-semibold text-secondary dark:text-white text-sm sm:text-lg">{project.title}</h3>
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href={withHttps(project.github)} target="_blank">
                            <Icon iconName={faGithub} size="lg" className="hover:scale-110 duration-300" />
                        </Link>

                        <Link href={withHttps(project.link)} target="_blank">
                            <Icon iconName={faGlobe} size="lg" className="hover:scale-110 duration-300" />
                        </Link>
                    </div>

                    <button type='button' className='w-fit bg-lavender text-white font-medium capitalize px-4 py-1 rounded-lg'>
                       view
                    </button>
                </div>
            </div>
        </div>

    )
}