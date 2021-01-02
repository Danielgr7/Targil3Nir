import './App.css';
import { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CCMyKitchen from './ClassComponent/CCMyKitchen';
import FCCreateNewIngredient from './FunctionalComponent/FCCreateNewIngredient';
import FCCreateNewRecipe from './FunctionalComponent/FCCreateNewRecipe';
import ENavbar from './Elements/ENavbar';



class App extends Component {





  render() {
    return (
      <div>
        {ENavbar}
        <Switch>
          <Route exact path="/">
            <CCMyKitchen />
          </Route>
          <Route path="/FCCreateNewIngredient">
            <FCCreateNewIngredient />
          </Route>
          <Route path="/FCCreateNewRecipe">
            <FCCreateNewRecipe />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
