import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Anamnese from "../pages/Anamnese";
import CadastroAnamnese from "../pages/Anamnese/CadastroAnamnese";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/anamneses" element={<Anamnese />} />
      <Route path="/cadastrar-anamnese" element={<CadastroAnamnese />} />
      <Route path="/visualizar-anamnese" element={<CadastroAnamnese />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
