// App.jsx
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import LetterPage from './LetterPage';

function App() {
    return (

            <AnimatePresence mode='wait'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/letter/:id" element={<LetterPage />} />
                </Routes>
            </AnimatePresence>

    );
}

export default App;


