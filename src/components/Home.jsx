import React from 'react';
import BlogImage1 from '../assets/barcelona.jpg';
import BlogImage2 from '../assets/bar.png';
import BlogImage3 from '../assets/inter.jpeg';
import BlogImage4 from '../assets/beyern.jpeg';
import BlogImage5 from '../assets/saudi.jpeg';
import BlogImage6 from '../assets/alexia.jpeg';
import BlogImage7 from '../assets/download.jpeg';
import BlogImage8 from '../assets/images.jpeg'
import '../styles/Home.css';

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${BlogImage8})`,
    backgroundSize: 'cover', // Adjust the background size as needed
    backgroundPosition: 'center', // Adjust the background position as needed
  };

  return (
    <div className="home-container">
      <h2>Popular News</h2>
      <div className="blog-list">
        <div className="main-blog">
          <div className="blog-item">
            <a href="https://www.espn.com/soccer/report/_/gameId/637056" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage1} alt="barcelona" />
              <p>Barcelona vs Madrid: The Elclasio</p>
            </a>
            <h2>The World Champion Messi taking on Cristiano Ronaldo in Elclasio against Real Madrid</h2>
          </div>
          <div className="blog-item">
            <a href="https://www.sofascore.com/borussia-dortmund-fc-bayern-munchen/xdbsydb" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage1} alt="saudi" />
              <p>Spain is World champions</p>
            </a>
            <h2>The World Champion Messi taking on Cristiano Ronaldo in Elclasio against Real Madrid</h2>
          </div>
          <div className="blog-item">
            <a href="https://www.espn.com/soccer/report/_/gameId/637056" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage1} alt="barcelona" />
              <p>Barcelona vs Madrid: The Elclasio</p>
            </a>
            <h2>The World Champion Messi taking on Cristiano Ronaldo in Elclasio against Real Madrid</h2>
          </div>
        </div>
        <div className="side-blogs">
          <h2>other sports news</h2>
          <div className="blog-item">
            <a href="https://www.sofascore.com/borussia-dortmund-fc-bayern-munchen/xdbsydb" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage6} alt="beyern" />
              <p>The world champion</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="https://www.sofascore.com/borussia-dortmund-fc-bayern-munchen/xdbsydb" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage3} alt="barcelona" />
              <p>milan derby</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="https://www.sofascore.com/borussia-dortmund-fc-bayern-munchen/xdbsydb" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage3} alt="barcelona" />
              <p>milan derby</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="https://www.sofascore.com/borussia-dortmund-fc-bayern-munchen/xdbsydb" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage3} alt="barcelona" />
              <p>milan derby</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="https://www.sofascore.com/borussia-dortmund-fc-bayern-munchen/xdbsydb" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage6} alt="beyern" />
              <p>The world champion</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="https://www.sofascore.com/borussia-dortmund-fc-bayern-munchen/xdbsydb" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage6} alt="beyern" />
              <p>The world champion</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="https://www.sofascore.com/borussia-dortmund-fc-bayern-munchen/xdbsydb" target="_blank" rel="noopener noreferrer">
              <img src={BlogImage6} alt="beyern" />
              <p>The world champion</p>
            </a>
          </div>
          {/* Add more blog items here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
