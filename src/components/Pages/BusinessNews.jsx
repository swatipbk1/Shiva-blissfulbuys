import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./BusinessNews.css";
import spinner from "./Spinner.gif";
// import Navigation from "./Header/Navigation"; // Import Navigation component
// import Footer from "./Footer/Footer"; // Import Footer component


const API_KEY = import.meta.env.VITE_API_KEY;

function stripHTML(html) {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

const BusinessNews = () => {
  const [myNews, setMyNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
      );
      const data = await response.json();
      const filteredArticles = data.articles.filter(
        (article) =>
          article.urlToImage !== null &&
          article.urlToImage !== undefined &&
          article.title !== null &&
          article.title !== undefined &&
          article.title !== "Unknown"
      );
      setMyNews(filteredArticles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFetchData = () => {
    fetchData();
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = myNews.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    handleFetchData();
  };

  return (
    <div>
    {/* <Navigation /> */}
    <div className="mainDiv">
      {loading ? (
        <img src={spinner} alt="Loading..." />
      ) : (
        <>
          {currentArticles.map((article, index) => (
            <div className="card" key={index}>
              <img
                src={
                  article.urlToImage ||
                  "https://via.placeholder.com/300x200?text=Image+Not+Available"
                }
                alt="Article"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {article.author || (article.source.name.startsWith('https') ? "Anonymous" : article.source.name)}
                </h5>
                <p className="card-text">{article.title}</p>
                <a
                  href={article.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleFetchData}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
          <div className="pagination">
            {[...Array(Math.ceil(myNews.length / articlesPerPage)).keys()].map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number + 1)}
                  className={`btn ${
                    number + 1 === currentPage ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {number + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
    {/* <Footer /> */}
  </div>
  );
};

export default BusinessNews;
