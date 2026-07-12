import { useEffect, useState } from 'react';

/**
 * Shows the user's pinned GitHub repositories as cards (name, description,
 * language, stars, forks) — mirroring GitHub's own pinned-repo widget.
 *
 * Primary source: gh-pinned-repos.egoist.dev, which scrapes the user's actual
 * pinned selection from their GitHub profile page (no auth/token needed).
 * That API returns whitespace-padded text nodes, so every field is trimmed.
 *
 * Fallback: if the pinned-repo service is unavailable, falls back to the
 * user's most recently updated public repos via the official GitHub REST API.
 */

const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
  Shell: '#89e051',
};

const clean = (val) => (typeof val === 'string' ? val.replace(/\s+/g, ' ').trim() : val);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.791l.72-4.192L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
  </svg>
);

const ForkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
  </svg>
);

const RepoCardSkeleton = () => (
  <div className="rounded-lg p-4 bg-black-300 border border-black-500 animate-pulse">
    <div className="h-4 w-2/3 bg-white/10 rounded mb-3" />
    <div className="h-3 w-full bg-white/5 rounded mb-2" />
    <div className="h-3 w-4/5 bg-white/5 rounded mb-4" />
    <div className="h-3 w-1/3 bg-white/5 rounded" />
  </div>
);

const RepoCard = ({ repo }) => (
  <a
    href={repo.link}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col justify-between rounded-lg p-4 bg-black-300 border border-black-500
               hover:border-[#22D3EE60] hover:-translate-y-0.5 transition-all duration-200 h-full">
    <div>
      <div className="flex items-center gap-2 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 text-[#A78BFA] flex-shrink-0" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
        </svg>
        <p className="text-white font-semibold text-sm truncate">{repo.repo}</p>
      </div>
      <p className="text-white-600 text-xs leading-relaxed line-clamp-2 min-h-[2.2em]">
        {repo.description || 'No description provided.'}
      </p>
    </div>

    <div className="flex items-center gap-4 mt-3 text-white-500 text-xs">
      {repo.language && (
        <span className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: repo.languageColor || LANGUAGE_COLORS[repo.language] || '#8b949e' }}
          />
          {repo.language}
        </span>
      )}
      {!!repo.stars && (
        <span className="flex items-center gap-1">
          <StarIcon /> {repo.stars}
        </span>
      )}
      {!!repo.forks && (
        <span className="flex items-center gap-1">
          <ForkIcon /> {repo.forks}
        </span>
      )}
    </div>
  </a>
);

const GithubPinnedRepos = ({ username, max = 4 }) => {
  const [repos, setRepos] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    const fetchFallback = () =>
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${max}`)
        .then((res) => {
          if (!res.ok) throw new Error(`GitHub API failed: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          if (cancelled) return;
          const mapped = data.map((r) => ({
            repo: r.name,
            link: r.html_url,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            forks: r.forks_count,
          }));
          setRepos(mapped);
          setStatus('ready');
        })
        .catch(() => {
          if (!cancelled) setStatus('error');
        });

    fetch(`https://gh-pinned-repos.egoist.dev/?username=${username}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Pinned repos request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (!Array.isArray(data) || data.length === 0) throw new Error('No pinned repos');

        const cleaned = data.slice(0, max).map((r) => ({
          repo: clean(r.repo),
          link: clean(r.link),
          description: clean(r.description),
          language: clean(r.language),
          languageColor: r.languageColor,
          stars: r.stars,
          forks: r.forks,
        }));
        setRepos(cleaned);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) fetchFallback();
      });

    return () => {
      cancelled = true;
    };
  }, [username, max]);

  if (status === 'error') {
    return (
      <div className="flex items-center justify-center h-[100px] text-white-500 text-sm text-center px-4">
        Couldn&apos;t load repositories right now. Browse them directly on{' '}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-[#22D3EE] ml-1 hover:underline">
          github.com/{username}
        </a>
        .
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-2">
      {status === 'loading' && Array.from({ length: max }).map((_, i) => <RepoCardSkeleton key={i} />)}
      {status === 'ready' && repos.map((repo, i) => <RepoCard key={`${repo.repo}-${i}`} repo={repo} />)}
    </div>
  );
};

export default GithubPinnedRepos;
