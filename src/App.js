import MainPage from './pages/MainPage/MainPage'
import EllyaWidad from './pages/EllyaWidad/EllyaWidad';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import FulanFulanah from './pages/FulanFulanah/FulanFulanah';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<EllyaWidad />} />
            </Routes>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        </HashRouter>
    );
}

export default App;
