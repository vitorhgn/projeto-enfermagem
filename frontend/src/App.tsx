import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import "./styles/app.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <div className="container">
        <Navbar />
        <div className="main">
          <AppRoutes />
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
