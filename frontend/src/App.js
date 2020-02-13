import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Phones from './components/phones/Phones';
import PhoneDetail from './components/phones/PhoneDetail';
import NotFound from './components/pages/NotFound';

import { Provider } from 'react-redux';
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Switch>
                <Route exact path="/" component={Phones} />
                <Route exact path="/phone/:id" component={PhoneDetail} />
                <Route component={NotFound} />
              </Switch>
            </div>
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
