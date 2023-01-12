import MainPage from './pages/MainPage/MainPage'
import WidadEllya from './pages/WidadEllya/WidadEllya';
import EllyaWidad from './pages/EllyaWidad/EllyaWidad';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FulanFulanah from './pages/FulanFulanah/FulanFulanah';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Widad-Ellya" element={<WidadEllya />} />
                <Route path="/Ellya-Widad" element={<EllyaWidad />} />
                <Route path="/Fulan-Fulanah" element={<FulanFulanah />} />
            </Routes>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        </BrowserRouter>
    );
}

export default App;
