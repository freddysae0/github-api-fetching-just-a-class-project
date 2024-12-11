import { fetcher } from './fetchers/github'

export default function Repos({url}) {
 
    
    if (error) return <div>failed to load</div>
    
    if (isLoading) return <div>loading...</div>
    
    return (
        <div>
            
            {data && data.map((repo) => (
                <li key={repo.id}>{repo.name}</li>
            ))}
        </div>
    )
}