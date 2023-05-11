
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';
import Error404 from './pages/Error404.jsx';

import NavMenu from './components/NavMenu/NavMenu.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

function App() {
  return (
    <>
      <HashRouter>
        <NavMenu />
        <Header />        
        <Routes>          
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
