function Navbar({ setUser }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => setUser(null));
    }
  
    return (
      <div className="Navbar">
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
}

export default Navbar