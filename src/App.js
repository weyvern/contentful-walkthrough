import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/articles' component={Articles} />
        <Route path='/articles/:id' component={SingleArticle} />
      </Switch>
    </div>
  );
};

export default App;
