import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

// Pages
import Navbar from './features/components/Navbar';
import AnimatedRoutes from './features/components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <Navbar/>
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
