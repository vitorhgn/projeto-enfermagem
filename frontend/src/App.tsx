import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes';



function App() {

  return (
      <BrowserRouter basename={"/"}>
        <AppRoutes />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
  );
}

export default App
