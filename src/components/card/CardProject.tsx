import Link from "next/link";
import { Icon } from "Components";
import { Project } from "@/src/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

type Props = {
    project: Project;
}

export const CardProject = ({ project }: Props) => {
    return (
        <Link href={project.link} target="_blank" className="flex flex-col shadow-md rounded-lg card">
            <iframe src={project.iframe} scrolling="no" frameBorder="0" loading="lazy" className="snap-none rounded-tl-lg rounded-tr-lg h-[250px]"></iframe>
            <div className="bg-white dark:bg-[#2C2C2C] flex flex-col justify-start items-start gap-3 p-5 rounded-bl-lg rounded-br-lg">
                <span className="text-primary dark:text-white text-xs sm:text-sm">{project.category}</span>
                <h3 className="font-semibold text-secondary dark:text-white text-sm sm:text-lg">{project.title}</h3>
                <div className="flex items-center gap-4">
                    <Link href={project.github} target="_blank">
                        <Icon iconName={faGithub} size="lg" className="hover:scale-110 duration-300"/>
                    </Link>

                    <Link href={project.link} target="_blank">
                        <Icon iconName={faGlobe} size="lg" className="hover:scale-110 duration-300"/>
                    </Link>
                </div>
            </div>
        </Link>

    )
}