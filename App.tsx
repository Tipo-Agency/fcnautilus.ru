
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Profile from './pages/Profile';
import Services from './pages/Services';
import Team from './pages/Team';
import B2B from './pages/B2B';
import FAQ from './pages/FAQ';
import Clubs from './pages/Clubs';
import ClubDetail from './pages/ClubDetail';
import Vacancies from './pages/Vacancies';
import News from './pages/News';

const About = () => <div className="py-40 text-center"><h1 className="text-9xl font-black italic outline-text">HISTORY</h1></div>;
const Contact = () => <div className="py-40 text-center"><h1 className="text-9xl font-black italic outline-text">CONTACT</h1></div>;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:clubId" element={<ClubDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<div className="py-40 text-center font-black text-6xl">404 <br /><span className="text-nautilus text-xl">NOT FOUND</span></div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
