import React from 'react';
import './login.css';
import logo from './logo.png'; // Certifique-se de que o caminho está correto

function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="Logo do Sistema de Enfermagem" className="logo" />
      <h2>Login do Sistema de Enfermagem</h2>
      <form>
        <div className="input-container">
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;