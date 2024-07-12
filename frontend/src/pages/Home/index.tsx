import React from "react";
import "./styles.css";

type HomeProps = {
  //
};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="app-container">
      <main className="app-main-content">
        <div className="app-dashboard">
          <h2>Dashboard</h2>
          <a
            href="https://www.gov.br/anvisa/pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="app-dashboard-link"
          >
            <button className="app-dashboard-button">
              Acesse o site da Anvisa
            </button>
          </a>
        </div>
        <div className="app-tasks">
          <h2>Tarefas e Alertas</h2>
          {/* Adicione lista de tarefas e alertas aqui */}
        </div>
      </main>
    </div>
  );
};

export default Home;
