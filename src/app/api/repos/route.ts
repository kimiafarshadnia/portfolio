import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const username = 'kimiafarshadnia';
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch repositories: ${response.statusText}`);
        }

        const repos = await response.json();
        return NextResponse.json(repos);
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
