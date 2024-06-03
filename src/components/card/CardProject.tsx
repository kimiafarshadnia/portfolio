import Link from "next/link";
import { Icon } from "Components";
import { Project } from "@/src/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons";

type Props = {
    project: Project;
}

export const CardProject = ({ project }: Props) => {
    return (
        <div className="flex flex-col shadow-md rounded-lg">
            <iframe src={project.iframe} scrolling="no" frameBorder="0" loading="lazy" className="snap-none rounded-tl-lg rounded-tr-lg h-[250px]"></iframe>
            <div className="bg-white dark:bg-[#2C2C2C] flex flex-col justify-start items-start gap-3 p-5 rounded-bl-lg rounded-br-lg">
                <span className="text-primary dark:text-white text-xs sm:text-sm">{project.category}</span>
                <h3 className="font-semibold text-secondary dark:text-white text-base sm:text-lg">{project.title}</h3>
                <div className="flex items-center gap-4">
                    <Link href={project.github} target="_blank">
                        <Icon iconName={faGithub} />
                    </Link>

                    <Link href={project.link} target="_blank">
                        <Icon iconName={faGlobe} />
                    </Link>
                </div>

                <div className="bg-lavender bg-clip-text text-transparent"></div>

                <div className="rounded-3xl p-px bg-lavender">
                    <div className="rounded-[calc(1.5rem-1px)] px-4 bg-white">
                        <button className="text-center bg-white p-1 flex items-center gap-2">
                            <span className="bg-lavender bg-clip-text text-transparent">view</span>
                            <Icon iconName={faArrowRight} size="lg" className="bg-lavender bg-clip-text text-transparent"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}