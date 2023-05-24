import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

// Pages
import AnimatedRoutes from './features/components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
