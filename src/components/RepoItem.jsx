export default function RepoItem(repo) {
    return (<li className="repo-item">
        <h3>{repo.name}</h3>
        <p>{repo.description || 'No description provided'}</p>
        <span>⭐ {repo.stargazers_count}</span>
    </li>)
}