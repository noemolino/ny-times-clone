import { useState } from "react";
import NewsCard from "../components/NewsCard/NewsCard";
import { searchArticles } from "../api/nyt";

const Search = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const results = await searchArticles(query);
      setArticles(results);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Searching...</p>}

      {articles.map((a) => (
        <NewsCard
          key={a._id}
          title={a.headline.main}
          url={a.web_url}
        />
      ))}
    </div>
  );
};

export default Search;
