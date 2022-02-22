import { useReducer } from "react";

function Navbar({ user, setUser }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => setUser(null));
    }
  
    return (
      <div className="Navbar">
        <div className="helloUser">
          Hello, {user.username}
        </div>
        <button id="logOutButton" onClick={handleLogout}>Logout</button>
      </div>
    );
}

export default Navbar