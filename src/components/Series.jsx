import '../styles/Series.css';
import React from 'react';

const Series = () => {
  const seriesList = [
    // ... Your series list here ...
    "INTERNATIONAL TOURS",
    "Ireland v India",
    "Afghanistan v Pakistan",
    "England v New Zealand",
    "INTERNATIONAL TOURS",
    "Ireland v India",
    "Afghanistan v Pakistan",
    "England v New Zealand",
    "England v Australia (U19)",
    "Australia v New Zealand (A-team)",
    'South Africa v Australia',
    'INTERNATIONAL TOURNAMENTS',
    'Asia Cup 2023',
    'World Cup 2023',
    'ICC TOURNAMENTS',
    'ICC Womens Championship',
    'Mens Cricket World Cup League 2',
    'CWC Challenge Group A',
    'CWC Challenge Group B',
    'ICC CWC Super League',
    'ICC World Test Championship',
    'UST10 2023',
    'The Hundred (M)',
    'The Hundred (W)',
  
  ];

  const tournaments = [];
  let currentTournament = null;

  for (const series of seriesList) {
    if (series.toUpperCase() === series) {
      // This is a tournament name
      if (currentTournament) {
        tournaments.push(currentTournament);
      }
      currentTournament = { name: series, matches: [] };
    } else {
      // This is a match
      currentTournament.matches.push(series);
    }
  }

  if (currentTournament) {
    tournaments.push(currentTournament);
  }

  return (
    <div>
      <h2>Cricket Series</h2>
      <div className="series-container">
        {tournaments.map((tournament, index) => (
          <div key={index} className="tournament-column">
            <div className="tournament-title">{tournament.name}</div>
            {tournament.matches.map((match, matchIndex) => (
              <div key={matchIndex} className="match-item">
                {match}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;
