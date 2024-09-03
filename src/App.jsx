
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Connexion from './pages/auth/Connexion';
import Accueil from './pages/home/Accueil';
import Inscription from './pages/auth/Inscription';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/connexion" replace />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/home" element={<Accueil />} />
      </Routes>
    </Router>
  );
}

export default App;
