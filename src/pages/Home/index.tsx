import React from 'react';

import './styles.scss';

function Home() {
  return (
    <main>
      <header className="header">
        <div className="text-box">
          <h1>Arcana</h1>
          <span>A website for learning about tarot cards</span>
        </div>
      </header>
      <footer className="footer">
        <div className="row">
          <div className="col-1-of-2">
            Menu
          </div>
          <div className="col-1-of-2">
            <p>This website was developed by <a href="https://jonasamorim.dev">Jonas Amorim</a> for his project named Arcana.</p>
            <p>You can find more information about the project on <a href="https://github.com/jonas1307/arcana-web">github</a>.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;