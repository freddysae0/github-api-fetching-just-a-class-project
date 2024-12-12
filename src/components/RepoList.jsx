import { NavLink } from 'react-router'
import RepoItem from './RepoItem'
export default function RepoList({ repos, username }) {
    return (
        <ul className="repo-list">
            {repos.map((repo) => (
                <NavLink
                    key={repo.id}
                    to={`/${username}/${repo.name}`}
                    className="repo-link"
                >
                    <RepoItem name={repo.name} description={repo.description} stargazers_count={repo.stargazers_count}></RepoItem>
                </NavLink>
            ))}
        </ul>

    )
}