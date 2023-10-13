import React from 'react';
import '../styles/Teams.css';

const Teams = () => {
  const teams = [
    { name: 'Italy', link: 'http://www.cavpo.com/2016/12/Italy.Squad.html' },
    { name: 'South-korea', link: 'https://www.espn.in/football/team/squad/_/id/451/south-korea' },
    { name: 'Australia', link: 'http://www.cavpo.com/2017/01/Australia.Squad.html' },
    { name: 'India', link: 'https://www.transfermarkt.co.in/indien/kader/verein/13957' },
    { name: 'Brazil', link: 'https://www.espn.com/soccer/team/squad/_/id/205/brazil' },
    { name: 'Argentina', link: 'https://www.espn.com/soccer/team/squad/_/id/202/argentina' },
    { name: 'France', link: 'https://www.skysports.com/football/teams/france/squad' },
    { name: 'Germany', link: 'https://www.espn.com/soccer/team/squad/_/id/481/germany' },
    { name: 'Portugal', link: 'https://www.transfermarkt.co.in/portugal/kader/verein/3300' },
    { name: 'Urugway', link: 'https://www.transfermarkt.com/uruguay/kader/verein/3449' },
    { name: 'Croatia', link: '/https://www.transfermarkt.com/kroatien/kader/verein/3556' },
    { name: 'Sweeden', link: 'https://www.skysports.com/football/teams/sweden/squad' },
    { name: 'Netherlands', link: 'https://www.espn.com/soccer/team/squad/_/id/449/netherlands' },
    { name: 'Qatar', link: 'https://www.transfermarkt.com/katar/kader/verein/14162' },
    { name: 'Norway', link: 'https://www.transfermarkt.com/norwegen/kader/verein/3440' },
    { name: 'USA', link: 'https://www.ussoccer.com/teams/usmnt' },
    { name: 'England', link: 'https://www.transfermarkt.co.in/england/kader/verein/3299' },
    // Add more teams here
  ];

  return (
    <div className='teams-container'>
      <h2>Most popular Football teams in the world</h2>
      <div className='team-list'>
        {teams.map((team, index) => (
          <div className='team-item' key={index}>
            <a href={team.link} target='_blank' rel='noopener noreferrer'>
              <h3>{team.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

