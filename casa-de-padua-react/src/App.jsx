import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WelcomeModal from './components/layout/WelcomeModal';

// Section components
import Hero from './components/sections/Hero';
import Header from './components/sections/Header';
import News from './components/sections/News';
import Events from './components/sections/Events';
import Centenary from './components/sections/Centenary';
import Contact from './components/sections/Contact';
import Membership from './components/sections/Membership';
import Activities from './components/sections/Activities';

// Page components
import ValoresYDias from './components/pages/ValoresYDias';
import Marca from './components/pages/Marca';
import Historia from './components/pages/Historia';
import ComisionDirectiva from './components/pages/ComisionDirectiva';
import Instalaciones from './components/pages/Instalaciones';
import AccionSocial from './components/pages/AccionSocial';
import BasquetFederal from './components/pages/BasquetFederal';
import BasquetMetropolitano from './components/pages/BasquetMetropolitano';
import Voley from './components/pages/Voley';
import GimnasiaRitmica from './components/pages/GimnasiaRitmica';
import Aquagym from './components/pages/Aquagym';
import Natacion from './components/pages/Natacion';
import EscuelitaFutbol from './components/pages/EscuelitaFutbol';
import Judo from './components/pages/Judo';
import Aikido from './components/pages/Aikido';
import PelotaPaleta from './components/pages/PelotaPaleta';
import Taekwondo from './components/pages/Taekwondo';
import TelasAcrobacia from './components/pages/TelasAcrobacia';
import EfectoMariposa from './components/pages/EfectoMariposa';
import TenisPaleta from './components/pages/TenisPaleta';
import TenisMesa from './components/pages/TenisMesa';
import EntrenamientoFuncional from './components/pages/EntrenamientoFuncional';
import ColoniaVacaciones from './components/pages/ColoniaVacaciones';
import Zumba from './components/pages/Zumba';
import Pilates from './components/pages/Pilates';
import Yoga from './components/pages/Yoga';
import Novedades from './components/pages/Novedades';
import DeportesYActividades from './components/pages/DeportesYActividades';
import TiraA from './components/pages/TiraA';
import TiraB from './components/pages/TiraB';
import VoleyLiga from './components/pages/VoleyLiga';
import VoleyPrimera from './components/pages/VoleyPrimera';

// Layout component for common structure
function Layout({ children }) {
  return (
    <div className="bg-casa-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Header />
      <News />
      <Activities />
      <Events />
      <Centenary />
      <Contact />
      <Membership />
    </>
  );
}

function App() {
  return (
    <Router>
      <WelcomeModal />
      <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/valores-y-dias" element={<Layout><ValoresYDias /></Layout>} />
          <Route path="/marca" element={<Layout><Marca /></Layout>} />
          <Route path="/historia" element={<Layout><Historia /></Layout>} />
          <Route path="/comision" element={<Layout><ComisionDirectiva /></Layout>} />
          <Route path="/instalaciones" element={<Layout><Instalaciones /></Layout>} />
          <Route path="/accion-social" element={<Layout><AccionSocial /></Layout>} />
          <Route path="/basquet" element={<Navigate to="/basquet/federal" replace />} />
          <Route path="/basquet/federal" element={<Layout><BasquetFederal /></Layout>} />
          <Route path="/basquet/metropolitano" element={<Layout><BasquetMetropolitano /></Layout>} />
          <Route path="/voley" element={<Layout><Voley /></Layout>} />
          <Route path="/voley/tira-a" element={<Layout><TiraA /></Layout>} />
          <Route path="/voley/tira-b" element={<Layout><TiraB /></Layout>} />
          <Route path="/voley/voley-liga" element={<Layout><VoleyLiga /></Layout>} />
          <Route path="/voley/primera" element={<Layout><VoleyPrimera /></Layout>} />
          <Route path="/gimnasia" element={<Layout><GimnasiaRitmica /></Layout>} />
          <Route path="/aquagym" element={<Layout><Aquagym /></Layout>} />
          <Route path="/natacion" element={<Layout><Natacion /></Layout>} />
          <Route path="/futbol" element={<Layout><EscuelitaFutbol /></Layout>} />
          <Route path="/efecto-mariposa" element={<Layout><EfectoMariposa /></Layout>} />
          <Route path="/gimnasia-artistica" element={<Layout><GimnasiaRitmica /></Layout>} />
          
          {/* Rutas existentes para artes marciales */}
          <Route path="/judo" element={<Layout><Judo /></Layout>} />
          <Route path="/aikido" element={<Layout><Aikido /></Layout>} />
          <Route path="/taekwondo" element={<Layout><Taekwondo /></Layout>} />
          
          {/* Nuevas rutas jerárquicas para artes marciales */}
          <Route path="/artes-marciales/judo" element={<Layout><Judo /></Layout>} />
          <Route path="/artes-marciales/aikido" element={<Layout><Aikido /></Layout>} />
          <Route path="/artes-marciales/taekwondo" element={<Layout><Taekwondo /></Layout>} />
          
          <Route path="/pelota-paleta" element={<Layout><PelotaPaleta /></Layout>} />
          <Route path="/telas" element={<Layout><TelasAcrobacia /></Layout>} />
          <Route path="/tenis-paleta" element={<Layout><TenisPaleta /></Layout>} />
          <Route path="/tenis-mesa" element={<Layout><TenisMesa /></Layout>} />
          <Route path="/funcional" element={<Layout><EntrenamientoFuncional /></Layout>} />
          <Route path="/colonia" element={<Layout><ColoniaVacaciones /></Layout>} />
          <Route path="/zumba" element={<Layout><Zumba /></Layout>} />
          <Route path="/pilates" element={<Layout><Pilates /></Layout>} />
          <Route path="/yoga" element={<Layout><Yoga /></Layout>} />
          <Route path="/novedades" element={<Layout><Novedades /></Layout>} />
          <Route path="/deportes-y-actividades" element={<Layout><DeportesYActividades /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
