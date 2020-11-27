import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, NavBar } from './layout';
import { Artists, Music, ApiMusic } from './pages';

class App extends React.Component {
    render() {
      return (
        <main>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" render={()=> <h1>Welcome</h1>}/>
            <Route path="/artists" component={Artists} />
            <Route path="/music" component={Music} />
            <Route path="/apiData" component={ApiMusic} />
          </Switch>
        </main>
      )
    }
  }

  export default App;