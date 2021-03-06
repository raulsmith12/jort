import React from 'react';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import ItemPage from './pages/ItemPage';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Router, Route } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Home} />
      <Header />
      <Route path="/list" component={ItemList} />
      <Route path="/items/:id" component={ItemPage} />
    </Router>
  );
}

export default App;
