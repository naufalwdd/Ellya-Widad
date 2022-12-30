import MainPage from './pages/MainPage/MainPage'
import WidadEllya from './pages/WidadEllya/WidadEllya';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FulanFulanah from './pages/FulanFulanah/FulanFulanah';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/resepsi-kami" element={<MainPage />} />
                <Route path="/resepsi-kami/Widad-Ellya" element={<WidadEllya />} />
                <Route path="/resepsi-kami/Fulan-Fulanah" element={<FulanFulanah />} />
            </Routes>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        </BrowserRouter>
    );
}

export default App;
