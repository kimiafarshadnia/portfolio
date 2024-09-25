'use client';
import { Repo } from 'Types';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CardProject, SkeletonCard } from 'Components';

export const Projects = () => {
    const t = useTranslations();
    const [repos, setRepos] = useState<Repo[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('/api/repos');
                const data = await response.json();
                setRepos(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching repositories:', error);
                setIsLoading(false);
            }
        };

        fetchRepos();
    }, []);

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes());
        }
    }, [emblaApi]);

    return (
        <div className="container mx-auto" id="projects">
            <div className="flex flex-col justify-center gap-8">
                <h2 className="px-5 md:px-0 bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl pb-2 w-fit">{t('project.title')}</h2>
                <p className="px-5 md:px-0 text-primary font-normal md:w-[600px] dark:text-white">
                    {t('project.description')}
                </p>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container pl-5 sm:pl-0 py-5">
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="embla__slide">
                                    <SkeletonCard />
                                </div>
                            ))
                        ) : (
                            repos.map((repo: Repo) => (
                                <div key={repo.id} className="embla__slide">
                                    <CardProject project={repo} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
