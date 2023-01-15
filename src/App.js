import EllyaWidad from './pages/EllyaWidad/EllyaWidad';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Routes>
                <Route path="/" element={<EllyaWidad />} />
            </Routes>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        </BrowserRouter>
    );
}

export default App;
