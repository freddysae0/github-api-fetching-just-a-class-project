import { useState } from 'react';
import useSWR from 'swr';
import './App.css';
import { fetcher } from '../fetchers/github';
import SearchForm from '../components/SearchForm';
import Pagination from '../components/Pagination';
import RepoList from '../components/RepoList';


function App() {
  const [username, setUsername] = useState('');
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(
    `https://harbour.dev.is/api/repos?username=${username}&page=${page}&per_page=10`,
    fetcher
  );

  function goNextPage() {
    setPage((page) => page + 1);
  }

  function goPreviousPage() {
    if (page > 1) setPage((page) => page - 1);
  }

  const onNewUsername = (usernameInput) => {
    setUsername(usernameInput);
  };

  if (error)
    return (
      <div className="error">
        <p>Failed to load. Please try again later.</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="app-container">
      <header className="header">
        <h1>GitHub Repository Explorer</h1>
      </header>
      <main>
        <section className="search-section">
          <SearchForm onNewUsername={onNewUsername} />
        </section>

        <section className="repos-section">
          <h2>Repositories for: {username || 'Please enter a username'}</h2>
          {data && Array.isArray(data) && data.length > 0 ? (
            <RepoList repos={data} username={username} ></RepoList>
          ) : (
            <p className="no-repos">No repositories found.</p>
          )}
        </section>

        <section className="pagination-section">
          <Pagination onPrevious={goPreviousPage} onNext={goNextPage} />
        </section>
      </main>
    </div >
  );
}

export default App;
