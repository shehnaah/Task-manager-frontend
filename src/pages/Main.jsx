import React from 'react';
import Header from '../pages/Header'
import Sidebar from '../pages/Sidebar'
import "./main.css";
import { border, borderRadius, color, height } from '@mui/system';

const MainContent = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main style={styles.main}>
      <div className="house-info">
      <div className="house-image">
        <img
          src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3NTgzNDU&ixlib=rb-4.0.3&q=80&w=400"
          alt="House"
        />
      </div>

      <div className="house-price">
        <span>$500,000</span>
      </div>

      <ul className="house-meta">
        <li>Somewhere</li>
        <li>
          158m<sup>2</sup>
        </li>
        <li>Big house</li>
      </ul>
    </div>
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.buttonActive}>Newbie</button>
        <button style={styles.buttonInactive}>Over 2-year</button>
      </div>
      <div style={styles.statistics}>
        <h4 style={styles.title}>Monthly statistics</h4>
        <div style={styles.date}>Dec 2023</div>
        <div style={styles.chartContainer}>
          <div style={{ ...styles.bar, ...styles.emptyBar }}></div>
          <div style={{ ...styles.bar, ...styles.emptyBar }}></div>
          <div style={{ ...styles.bar, ...styles.emptyBar }}></div>
          <div style={{ ...styles.bar, ...styles.filledBar }}>
            <div style={styles.stats}>
              <span style={styles.statNumber}>120</span>
              <span style={styles.statValue}>2.3m</span>
            </div>
          </div>
          <div style={{ ...styles.bar, ...styles.emptyBar }}></div>
        </div>
      </div>
    </div>
      
        {/* <section style={styles.stats}>
          <h2>Monthly Statistics</h2>
          <p>Newbie</p>
          <p>120 startups boosted</p>
        </section>
        <section style={styles.highlight}>
          <h1>Ignite your startup's potential with Booster!</h1>
          <button style={styles.button} aria-label="Learn more about Booster">
            Learn More
          </button>
        </section> */}

      </main>
    </>
  );
};

const styles = {
  container: {
    width: "250px",
    borderRadius: "15px",
    backgroundColor: "#f5f5f5",
    padding: "15px",
    fontFamily: "'Arial', sans-serif",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop:"-1250px",
    marginLeft:"230px",
    height:"232px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    color: "#fff",
    height:"40px"
    ,borderRadius:"70px"
  },
  buttonActive: {
    backgroundColor: "#1E90FF",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "5px 15px",
    fontSize: "14px",
    cursor: "pointer",
    width:"200px"
  },
  buttonInactive: {
    backgroundColor: "#e0e0e0",
    color: "#333",
    border: "none",
    borderRadius: "50px",
    padding: "5px 15px",
    fontSize: "14px",
    cursor: "pointer",
    width:"200px"
  },
  statistics: {
    textAlign: "center",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  date: {
    fontSize: "12px",
    color: "#888",
    marginBottom: "15px",
  },
  chartContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  bar: {
    width: "14%",
    height: "100px",
    borderRadius: "15px",
  },
  emptyBar: {
    backgroundColor: "#e0e0e0",
  },
  filledBar: {
    backgroundColor: "blue",
    position: "relative",
    height: "130px",
    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4), blue)",
  },
  stats: {
    position: "absolute",
    top: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  statNumber: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },
  statValue: {
    fontSize: "12px",
    color: "#666",
  },
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
