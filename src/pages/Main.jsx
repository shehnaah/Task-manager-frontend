import React from 'react';
import Header from '../pages/Header'
import Sidebar from '../pages/Sidebar'
const MainContent = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main style={styles.main}>
        <section style={styles.stats}>
          <h2>Monthly Statistics</h2>
          <p>Newbie</p>
          <p>120 startups boosted</p>
        </section>
        <section style={styles.highlight}>
          <h1>Ignite your startup's potential with Booster!</h1>
          <button style={styles.button} aria-label="Learn more about Booster">
            Learn More
          </button>
        </section>
      </main>
    </>
  );
};

const styles = {
  main: { flex: 1, padding: '20px' },
  stats: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    marginTop: '-700px',
    maxWidth:"1370px",
    marginLeft:"300px",
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  highlight: {
    backgroundColor: '#f0f8ff',
    padding: '20px',
    maxWidth:"1370px",
    marginLeft:"300px",
    borderRadius: '8px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default MainContent;
