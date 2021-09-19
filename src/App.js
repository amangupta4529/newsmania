
import './App.css';

import Navbar from './components/Navbar'
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App =()=> {
  const apikey=process.env.REACT_APP_NEWS_API;

    return (
      <div> <Navbar/>
        <Router>
          <Switch>
          <Route exact path="/">
          <News country='in' apikey={apikey} category='general'/>
            </Route>
            <Route exact path="/general">
          <News country='in' apikey={apikey} category='general'/>
            </Route>
            <Route exact path="/business">
            <News country='in' apikey={apikey} category='business'/>
            </Route>
            <Route path="/entertainment">
            <News country='in' apikey={apikey} category='entertainment'/>
            </Route>
            <Route path="/health">
            <News country='in' apikey={apikey} category='health'/>
            </Route>
            <Route path="/sports">
            <News country='in' apikey={apikey} category='sports'/>
            </Route>
            <Route path="/technology">
            <News country='in' apikey={apikey} category='technology'/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  
}

export default App;
