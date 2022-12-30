import MainPage from './pages/MainPage/MainPage'
import WidadEllya from './pages/WidadEllya/WidadEllya';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FulanFulanah from './pages/FulanFulanah/FulanFulanah';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/Widad-Ellya" element={<WidadEllya />} />
                <Route path="/Fulan-Fulanah" element={<FulanFulanah />} />
            </Routes>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        </BrowserRouter>
    );
}

export default App;
