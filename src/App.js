import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './bookings/Home';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
