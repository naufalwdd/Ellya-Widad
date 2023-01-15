import EllyaWidad from './pages/EllyaWidad/EllyaWidad';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App() {
    console.log(window.location.pathname);
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Ellya-Widad" element={<EllyaWidad />} />
            </Routes>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        </HashRouter>
    );
}

export default App;
