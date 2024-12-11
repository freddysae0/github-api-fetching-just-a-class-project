import { useState } from 'react'

import useSWR from 'swr'
import './App.css'
import axios from 'axios'
import { fetcher } from './fetchers/github'
import SearchForm from './components/SearchForm'
import Pagination from './components/Pagination'

function App() {


  const [username, setUsername] = useState('')
  const [page, setPage] = useState(1)
  console.log(page);
  
  const { data, error, isLoading } = useSWR(
    `https://harbour.dev.is/api/repos?username=${username}&page=${page}&per_page=10`,
    fetcher
  );

  function goNextPage() {
    
    setPage((page) => page + 1);
  }

  function goPreviousPage() {
    if (page>0) setPage((page) => page - 1);
  }




  const onNewUsername = (usernameInput) => {
    setUsername(usernameInput)
  };

  if (error)
    return <div>failed to load</div>
  if (isLoading)
    return <div>loading...</div>

  console.log(data);

  return (
    <>
      <SearchForm onNewUsername={onNewUsername} />
      <Pagination onPrevious={goPreviousPage} onNext={goNextPage} ></Pagination>
      <h1>{username}</h1>

      {data && Array.isArray(data) && data.map((repo) => (
        <a href="">

          <li key={repo.id}>{repo.name}</li>
        </a>
      ))}

    </>
  )
}

export default App
