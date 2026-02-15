import { useState } from "react";
import { fetchRecipes } from "../services/recipeApi";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const data = await fetchRecipes(query);
    console.log(data); // proof it works
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;