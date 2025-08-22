import React, { useEffect, useState } from "react";
import MainArticle from "../components/MainArticle/MainArticle";
import NewsCard from "../components/NewsCard/NewsCard";
import TopicFilters from "../components/TopicFilters/TopicFilters";
import { getTopStories } from "../api/nyt";

// Funzione di utilità per filtrare
const applyFilters = (articles, activeFilter, searchTerm) => {
  let result = articles;

  // Filtra per sezione
  if (activeFilter && activeFilter !== "All") {
    result = result.filter(article => article.section === activeFilter);
  }

  // Filtra per termine di ricerca
  if (searchTerm) {
    const termLower = searchTerm.toLowerCase();
    result = result.filter(article =>
      article.title.toLowerCase().includes(termLower) ||
      (article.abstract && article.abstract.toLowerCase().includes(termLower))
    );
  }

  return result;
};

const Home = ({ searchTerm }) => { // Riceve searchTerm come prop
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const data = await getTopStories();
        setAllArticles(data);
        const uniqueSections = ["All", ...new Set(data.map((a) => a.section).filter(Boolean))];
        setSections(uniqueSections);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    // Dipende da allArticles, activeFilter e searchTerm
    const result = applyFilters(allArticles, activeFilter, searchTerm);
    setFilteredArticles(result);
  }, [allArticles, activeFilter, searchTerm]);

  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
  };

  if (loading) return <p>Loading news...</p>;
  if (filteredArticles.length === 0) return <p>No articles found matching your criteria.</p>;

  return (
    <div className="home-container">
      <TopicFilters sections={sections} onFilter={handleFilterChange} />
      
      <div className="articles-grid">
        {filteredArticles.map((article, index) => {
          if (index % 5 === 0) {
            return <MainArticle key={article.url} article={article} />;
          } else {
            return (
              <NewsCard
                key={article.url}
                title={article.title}
                url={article.url}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;