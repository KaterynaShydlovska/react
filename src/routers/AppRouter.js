import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Contact from '../components/Contact';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)


export default AppRouter;