import { Repo } from 'Types';

// Return truthy classes
export const clx = (...classes: any[]) => {
    return classes.filter(Boolean).join(' ');
};

export const withHttps = (url: string) => {
    return url.replace(
        /^(?:(.*:)?\/\/)?(.*)/i,
        (match, schema, nonSchemaUrl) =>
            schema ? match : `https://${nonSchemaUrl}`
    );
};

/**
 * Generate a unique id.
 * @returns {string} The generated unique id.
 */
export const uid = () => {
    // Way 1: return Date.now().toString(36) + Math.random().toString(36).substr(5);
    return crypto.randomUUID();
};

export const fetchGitHubRepos = async (): Promise<Repo[]> => {
    const username = 'kimiafarshadnia';
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
    });

    if (!res.ok) {
        const errorDetails = await res.json();
        console.error('Error fetching GitHub repositories:', errorDetails.message);
        throw new Error(`Failed to fetch repositories: ${errorDetails.message}`);
    }

    return res.json();
};
