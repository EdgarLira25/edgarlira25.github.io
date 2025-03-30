import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/home';
import { Projects } from './Pages/projects';
import { Resume } from './Pages/resume';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
}
