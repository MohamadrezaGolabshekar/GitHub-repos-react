import React, { useReducer } from 'react';
import './App.css';
import { Header, Title } from './components/StyledComponents';
import RepoContainer from './container/RepoContainer';
import Nav from './components/UI/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppContext } from "./Store/Store";
import { appReducer, initialState } from "./Reducer/Reducer";
import SavedReposContainer from "./container/SavedReposContainer";

function App() {

  const [state, dispatch]: any = useReducer(appReducer, initialState);
  const value: any = [state, dispatch];

  return (
    <AppContext.Provider value={value}>
      <Router>

        <Header>
          <Link to="/">
            <Title>GitHub Repo App</Title>
          </Link>
          <Nav />
        </Header>

        <Switch>
          <Route path="/saved-repos">
            <SavedReposContainer />
          </Route>
          <Route path="/">
            <RepoContainer />
          </Route>
        </Switch>

      </Router>
    </AppContext.Provider>
  );
}

export default App;
