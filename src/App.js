
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom' 
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from "./Pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path="/Portfolio/" element={<Home />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
