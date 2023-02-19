import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Verification from './Pages/Verification';
function App() {
  return (
    <Router>
     <div className="App">
        <div className="component">
          <Route exact path="/">
            <Verification />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
