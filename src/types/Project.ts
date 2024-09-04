export interface Repo {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    fork: boolean;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    language: string | null;
    created_at: string;
    updated_at: string;
    topics: string[];
    homepage?: string;
    size: number;  // Size in kilobytes
    default_branch: string;
    vercel_link?: string;  // Vercel deployment link
}

export interface PinnedRepoResponse {
    viewer: {
        pinnedRepositories: {
            edges: {
                node: Repo;
            }[];
        };
    };
}