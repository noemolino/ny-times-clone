import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet";
import MainArticle from "../components/MainArticle/MainArticle";
import NewsCard from "../components/NewsCard/NewsCard";
import TopicFilters from "../components/TopicFilters/TopicFilters";
import { getTopStories } from "../api/nyt";

const useApplyFilters = (allArticles, activeFilter, searchTerm) => {
  return useMemo(() => {
    let result = allArticles;

    if (activeFilter && activeFilter !== "All") {
      result = result.filter(article => article.section === activeFilter);
    }

    if (searchTerm) {
      const termLower = searchTerm.toLowerCase();
      result = result.filter(article =>
        article.title.toLowerCase().includes(termLower) ||
        (article.abstract && article.abstract.toLowerCase().includes(termLower))
      );
    }

    return result;
  }, [allArticles, activeFilter, searchTerm]); 
};

const Home = ({ searchTerm }) => { 
  const [allArticles, setAllArticles] = useState([]);
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

  const filteredArticles = useApplyFilters(allArticles, activeFilter, searchTerm);

  const handleFilterChange = useCallback((newFilter) => {
    setActiveFilter(newFilter);
  }, []); 

  if (loading) return <p>Loading news...</p>;
  if (filteredArticles.length === 0) return <p>No articles found matching your criteria.</p>;

  return (
    <div className="home-container">
      <Helmet>
        <title>Latest World News – Inspired by The New York Times</title>
        <meta 
          name="description" 
          content="Stay informed with the latest world news, analysis, and insights in a New York Times–inspired digital newspaper. Clear, modern, and always updated." 
        />
      </Helmet>
      
      <TopicFilters 
        sections={sections} 
        onFilter={handleFilterChange} 
        activeFilter={activeFilter}
      />
      
      <div className="articles-grid">
        {filteredArticles.length > 0 && filteredArticles.map((article, index) => {
          const ArticleComponent = index % 5 === 0 ? MainArticle : NewsCard;
          return (
            <ArticleComponent 
              key={article.url} 
              article={article} 
              title={article.title} 
              url={article.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;