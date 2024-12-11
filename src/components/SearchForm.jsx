import { useState } from "react"


export default function SearchForm({  username, onNewUsername }) {
    const [usernameInput, setUsernameInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission
        onNewUsername(usernameInput);  // Call the passed function with the usernameInput
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} type="text" ></input>

            <button type='submit'>Fetch</button>

        </form>
    )
}