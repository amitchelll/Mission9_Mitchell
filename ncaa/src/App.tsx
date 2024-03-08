import React from 'react';
import './App.css';
import collegeInfo from './CollegeBasketballTeams.json';

const styles = {
  collegeContainer: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  school: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '5px',
  },
  mascot: {
    color: '#666',
    marginBottom: '5px',
  },
  location: {
    color: '#666',
  }
};


interface CollegeProps {
  school: string;
  name: string;
  city: string;
  state: string;
}


function Welcome() {
  return (
    <h1>Colleges in NCAA Basketball</h1>
  );
}


class Colleges extends React.Component<CollegeProps> {
  render() {
    const { school, name, city, state } = this.props;
    return (
      <div style={styles.collegeContainer}>
        <h2 style={styles.school}>{school}</h2>
        <h3 style={styles.mascot}>Mascot: {name}</h3>
        <h3 style={styles.location}>Location: {city}, {state}</h3>
      </div>
    );
  }
}

function CollegeList () {
  return (
    <div>
      {collegeInfo.teams.map((college: CollegeProps) => (
        <Colleges {...college}/>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      < Welcome />
      < CollegeList />
    </div>
  );
}

export default App;
