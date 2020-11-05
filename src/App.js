import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Article from './components/Article';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/article" component={Article} />
        <Route path="/practice" component={Flashcards} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
