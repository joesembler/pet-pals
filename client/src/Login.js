import {useState} from "react"

function Login({ onLogin, setResponse}) {
    const [username, setUsername] = useState("");
  
    function handleSubmit(e) {
        let response;
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((r) => {
            r.json()
            setResponse(r)
        })
        .then((user) => onLogin(user));
         
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login