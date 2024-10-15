import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Landing />}/>
                    <Route path='/home' element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
