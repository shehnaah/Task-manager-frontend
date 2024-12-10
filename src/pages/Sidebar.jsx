import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul>
        <li>Introduction</li>
        <li>Analysis</li>
        <li>Connections</li>
        <li>Boosting</li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: { width: '200px', padding: '20px', backgroundColor: '#eaeaea', height: '100vh' },
};

export default Sidebar;
