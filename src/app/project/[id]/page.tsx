import { Project } from "Types"
import { promises as fs } from 'fs';
export async function generateStaticParams() {
    const file = await fs.readFile(process.cwd() + '/src/data/project.json', 'utf8');
    // console.log(file)
    const data = JSON.parse(file);
    console.log(data)
    if (!data) return null
    else {
        return data.map((project: Project) => ({
            id: project?.id,
            title: project?.title,
            image: project?.image,
            category: project?.category,
            github: project?.github,
            iframe: project?.iframe,
            link: project?.link
        }))

    }
}

export default function ProjectID({ data }: {
    data: {
        id?: string,
        title?: string,
        image?: string,
        category?: string,
        github?: string,
        iframe?: string,
        link?: string
    }
}) {
    return (
        <div className="container mx-auto py-[100px] px-5 md:px-0">
            <div>Project: {data?.id}</div>
            <div>{data?.title}</div>
        </div>
    )
}