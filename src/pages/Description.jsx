import { useParams } from 'react-router';
import useSWR from 'swr';
import { fetcher } from '../fetchers/github';

function Description() {
  const { username, repo } = useParams();
  console.log(username, repo);

  const { data, error, isLoading } = useSWR(
    `https://harbour.dev.is/api/repo?username=${username}&project=${repo}`,
    fetcher
  );

  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <div>Loading...</div>;

  // Destructura los datos relevantes
  const {
    name,
    description,
    owner,
    html_url,
    language,
    stargazers_count,
    forks_count,
    created_at,
    topics,
  } = data;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{name}</h1>
      <p><strong>Description:</strong> {description || 'No description available'}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={owner.avatar_url}
          alt={`${owner.login}'s avatar`}
          style={{ width: '50px', borderRadius: '50%' }}
        />
        <p>
          <strong>Owner:</strong> {owner.login}
        </p>
      </div>
      <p><strong>Language:</strong> {language}</p>
      <p><strong>Stars:</strong> {stargazers_count}</p>
      <p><strong>Forks:</strong> {forks_count}</p>
      <p><strong>Created At:</strong> {new Date(created_at).toLocaleDateString()}</p>
      <p>
        <strong>Topics:</strong>{' '}
        {topics && topics.length > 0 ? topics.join(', ') : 'No topics available'}
      </p>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        Visit Repository
      </a>
    </div>
  );
}

export default Description;
