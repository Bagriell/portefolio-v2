import styles from './App.module.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Landing from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';
import Navbar from './components/Navbar';
import Contacts from './pages/Contacts/Contacts';


function App() {
  return (
    <Router>
      <div className={styles.App} >
        <Navbar />
        <div className={styles.containerBody}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
