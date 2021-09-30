import './App.css';

import { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

import BlankApp from './blank-app/BlankApp';
import { NAV_ITEMS } from './constants/Navigation.js';
import TodoApp from './todo-app/Todo';

function App() {
  const pathname = useLocation().pathname;
  useEffect(() => {
    document.body.scrollTop = 0;
  }, [pathname]);
  
  return (
    <div className="App">
      <Route path={NAV_ITEMS.TODO_APP.to} component={TodoApp} exact={true} />
      <Route path={NAV_ITEMS.BLANK_APP.to} component={BlankApp} exact={true} />
      <Route path={'/'} component={TodoApp} exact={true} />
    </div>
  );
}

export default App;
