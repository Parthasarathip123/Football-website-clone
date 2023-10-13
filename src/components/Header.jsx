import React from 'react';
import '../styles/Header.css';

import TeamImage1 from '../assets/bright1.png';
import TeamImage2 from '../assets/dor.png';
import TeamImage3 from '../assets/MACHASTER.png';
import TeamImage4 from '../assets/CHEL.png';
import TeamImage5 from '../assets/INT.png';
import TeamImage6 from '../assets/MACHASTER.png';
import TeamImage7 from '../assets/BEY.png';
import TeamImage8 from '../assets/dor.png';

const matches = [
  { id: 'match1', league: 'LaLiga', team1: 'Brighton', team2: 'Dortmund', time: '8:00pm', url: 'https://www.bbc.com/sport/live/football/56449503' },
  { id: 'match2', league: 'Premier League', team1: 'City', team2: 'Chelsea', time: '7:30pm', url: 'https://www.bbc.co.uk/sport/live/football/54074842' },
  { id: 'match3', league: 'SerieA', team1: 'Inter', team2: 'City', time: '11:30pm', url: 'https://www.bbc.co.uk/sport/live/football/65430668' },
  { id: 'match4', league: 'Bundesliga', team1: 'Bayern', team2: 'Dortmund', time: '8:30pm', url: 'https://www.espn.com/soccer/match/_/gameId/608810' },
  // Add unique id values for the remaining matches
];

const teamImages = [TeamImage1, TeamImage2, TeamImage3, TeamImage4, TeamImage5, TeamImage6, TeamImage7, TeamImage8];

const Header = () => {
  return (
    <div className='btn'>
      <marquee scrollamount='5' direction='left'> {/* Adjust the scrolling speed */}
        <div className='matches-container'>
          {matches.map((match, index) => (
            <a key={match.id} href={match.url} target="_blank" rel="noopener noreferrer">
              <button className='all'>
                <h3>{match.league}</h3>
                <div className="team-info">
                  <img src={teamImages[index * 2]} alt={`Team ${index * 2 + 1}`} />
                  <p>{match.team1}</p>
                  <div>vs</div>
                  <img src={teamImages[index * 2 + 1]} alt={`Team ${index * 2 + 2}`} />
                  <p>{match.team2}</p>
                </div>
                <p>{match.time}</p>
              </button>
            </a>
          ))}
        </div>
      </marquee>
    </div>
  );
}

export default Header;
