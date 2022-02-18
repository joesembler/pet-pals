function Navbar({ setUser }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => setUser(null));
    }
  
    return (
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
}

export default Navbar