import { Navigate, Route, Routes } from 'react-router-dom';
import Alcantara from '../pages/Alcantara';
import Gustavo from '../pages/Gustavo';
import Maria from '../pages/Maria';
import Vitor from '../pages/Vitor';


const AppRoutes: React.FC = () => {

  return (
    <Routes>
        <Route path="/alcantara" element={<Alcantara />} />
        <Route path="/gustavo" element={<Gustavo />} />
        <Route path="/maria" element={<Maria />} />
        <Route path="/vitor" element={<Vitor />} />
        <Route path="/" element={<Navigate to="/gustavo" />} />
    </Routes>
  );
};

export default AppRoutes;