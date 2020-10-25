import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { Navbar } from './Components/Navbar';

// https://www.youtube.com/watch?v=V1rhxheJg4A&t=312s

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
