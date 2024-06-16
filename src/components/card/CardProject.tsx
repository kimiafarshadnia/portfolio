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
        <Link href={withHttps(project.link)} target="_blank" className="hover:scale-110 duration-300 h-[450px] flex flex-col shadow-md rounded-lg card">
            <img src='/images/react.svg' alt="image_project" />
            <div className="bg-white dark:bg-[#2C2C2C] h-full flex flex-col justify-start items-start gap-3 p-5 rounded-bl-lg rounded-br-lg">
                <span className="text-primary dark:text-white text-xs sm:text-sm">{project.category}</span>
                <h3 className="font-semibold text-secondary dark:text-white text-sm sm:text-lg">{project.title}</h3>
                <div className="flex items-center gap-4 h-full">
                    <Link href={withHttps(project.github)} target="_blank">
                        <Icon iconName={faGithub} size="lg" className="hover:scale-110 duration-300"/>
                    </Link>

                    <Link href={withHttps(project.link)} target="_blank">
                        <Icon iconName={faGlobe} size="lg" className="hover:scale-110 duration-300"/>
                    </Link>
                </div>
            </div>
        </Link>

    )
}