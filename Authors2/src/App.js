import './App.css';
import {Router, Link} from '@reach/router'
import Allauthors from './components/Allauthors';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
        <h1>Favorite Authors</h1>
        <Link to = "/author/new">Add an Author</Link>
        <Router>
        <Allauthors path = "/"></Allauthors>
        <CreateAuthor path = "/author/new"></CreateAuthor>
        <EditAuthor path = "/author/edit/:authorid"></EditAuthor>
        
        </Router>
    </div>
  );
}

export default App;
