import EllyaWidad from './pages/EllyaWidad/EllyaWidad';
import Tasyakuran from './pages/EllyaWidad/Tasyakuran';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Ellya-Widad" element={<EllyaWidad />} />
                <Route path="/Tasyakur-Ellya-dan-Widad" element={<Tasyakuran />} />
            </Routes>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        </HashRouter>
    );
}

export default App;
