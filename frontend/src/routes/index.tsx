import { Navigate, Route, Routes } from "react-router-dom";
import Alcantara from "../pages/Alcantara";
import Gustavo from "../pages/Gustavo";
import Maria from "../pages/Maria";
import Vitor from "../pages/Vitor";
import CadastroAnamnese from "../pages/Vitor/CadastroAnamnese";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/alcantara" element={<Alcantara />} />
      <Route path="/gustavo" element={<Gustavo />} />
      <Route path="/maria" element={<Maria />} />
      <Route path="/anamneses" element={<Vitor />} />
      <Route path="/cadastrar-anamnese" element={<CadastroAnamnese />} />
      <Route path="/visualizar-anamnese" element={<CadastroAnamnese />} />
      <Route path="/" element={<Navigate to="/gustavo" />} />
    </Routes>
  );
};

export default AppRoutes;
