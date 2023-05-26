
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom' 
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'

function App() {
  return (
    <div className="App">
      <Router>
  
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/projects" element={<Projects />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
