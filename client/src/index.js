import React, { useContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Context from './context';
import reducer from './reducer';
import App from './containers/App';

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </Context.Provider>
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));