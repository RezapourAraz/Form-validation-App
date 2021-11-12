import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import styles from './Styles/App.module.css';


const App = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="/" to="/signup" />
      </Switch>
      
    </div>
  );
};

export default App;
