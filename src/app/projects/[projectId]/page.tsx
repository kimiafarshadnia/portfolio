import { fetchGitHubRepos } from 'Utils';

export default async function ProjectDetailPage({ params }: { params: { projectId: string } }) {
    const { projectId } = params;
    const repos = await fetchGitHubRepos();
    const repo = repos.find((r) => r.name === projectId);

    if (!repo) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold">{repo.name}</h1>
            <p className="text-lg text-gray-700 mt-2">{repo.description || 'No description available'}</p>
            <p className="mt-4">
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View on GitHub
                </a>
            </p>
            <p className="mt-2"><strong>Language:</strong> {repo.language || 'Not specified'}</p>
            <p className="mt-2"><strong>Created at:</strong> {new Date(repo.created_at).toLocaleDateString()}</p>
            <p className="mt-2"><strong>Updated at:</strong> {new Date(repo.updated_at).toLocaleDateString()}</p>
            <p className="mt-2"><strong>Stars:</strong> {repo.stargazers_count}</p>
            <p className="mt-2"><strong>Forks:</strong> {repo.forks_count}</p>
            <p className="mt-2"><strong>Open Issues:</strong> {repo.open_issues_count}</p>
            <p className="mt-2"><strong>Topics:</strong> {repo.topics.join(', ') || 'None'}</p>
        </div>
    );
}
