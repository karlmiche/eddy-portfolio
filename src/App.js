import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Footer from "./components/footer";
import Header from "./components/header";

// import components from pages folder
import Home from './pages/Home';
import About from './pages/About';
import Dropbox from './pages/Dropbox';

// making an array for the routes
const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/about', name: 'About', Component: About},
  {path: '/learninlib', name: 'Learnin Lib', Component: Dropbox}
]

function App() {
  return (
    <div className="App">
      <Header />
      {routes.map(({ path, Component }) => (
        <Route key="name" path={path} exact>
          <div className="page">
            <Component />
          </div>
        </Route>
      ))}
      <Footer />
    </div>
  );
}

export default App;
