import { useState } from "react";

const Header = ({ onSearch }) => {
  const [searchNotes, setSearchNotes] = useState("");

 

  const onSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchNotes(searchTerm);
    onSearch(searchTerm); 
  };
  
  return (
    <header className="header">
       <h1>Welcome to the Note Taking App</h1>
      <p>This is your one-stop app for taking and organizing notes.</p>
    <div className="search-bar mb-3 ">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchNotes}
          onChange={onSearchChange}
        />
      
    </div>
    </header>
  );
};

export default Header;
