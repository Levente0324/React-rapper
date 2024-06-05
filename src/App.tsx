import React, { useState, useEffect } from 'react';
import './App.css';

interface Rapper {
  id: number;
  name: string;
  born: number;
  stillAlive: boolean;
}

const App: React.FC = () => {
  const [rapper, setRapper] = useState<Rapper[]>([]);
  const [newRapperName, setNewRapperName] = useState('');
  const [newRapperBorn, setNewRapperBorn] = useState('');

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = () => {
    fetch('http://localhost:3000/rapperek')
      .then(response => response.json())
      .then(data => {
        setRapper(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };


  const handleAddTopic = () => {
    const newTopic: Rapper = {
      id: rapper.length + 1,
      name: newRapperName,
      born: parseFloat(newRapperBorn), 
      stillAlive: true 
    };

    fetch('http://localhost:3000/rappereket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTopic)
    })
      .then(() => {
        fetchTopics(); 
        setNewRapperName('');
        setNewRapperBorn('');
      })
      .catch(error => {
        console.error('Error adding rapper:', error);
      });
  };


  const renderTableData = () => {
    return rapper.map((item, idx) => (
      <tr key={idx}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.born}</td>
        <td>{item.stillAlive ? 'Alive' : 'Dead'}</td>
      </tr>
    ));
  };

  return (
    <div id='maindiv' style={{padding: "50px"}}>
      <h1>Rapperek</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Born</th>
            <th>Still Alive</th>
          </tr>
        </thead>
        <tbody>
          {renderTableData()}
        </tbody>
      </table>
      <h2 style={{marginTop: "100px"}}>Add New Rapper</h2>
      <div>
        <label>
        <p style={{marginRight: "10px"}}>Name:</p>
          <input type="text" value={newRapperName} onChange={e => setNewRapperName(e.target.value)} />
        </label>
        <br></br>
        <label>
        <p style={{marginRight: "10px"}}>Born:</p>
          <input type="number" value={newRapperBorn} onChange={e => setNewRapperBorn(e.target.value)} />
        </label>
        <br></br>
        <br></br>
        <button onClick={handleAddTopic}>Add rapper</button>
      </div>
    </div>
  );
};

export default App;