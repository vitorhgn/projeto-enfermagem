import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <button className="nav-button">INICIO</button>
        <button className="nav-button">ANAMNESE</button>
      </nav>
      <main className="main-content">
        <div className="dashboard">
          <h2>Dashboard</h2>
          <a href="https://www.gov.br/anvisa/pt-br" target="_blank" rel="noopener noreferrer" className="dashboard-link">
            <button className="dashboard-button">Acesse o site da Anvisa</button>
          </a>
        </div>
        <div className="tasks">
          <h2>Tarefas e Alertas</h2>
          {/* Adicione lista de tarefas e alertas aqui */}
        </div>
      </main>
    </div>
  );
}

export default Home;
