import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Correction de l'import
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import Login from "./pages/login";

import { Link } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
        <Switch>
          {/* Correction de 'components' en 'component' */}
          <PrivateRoute exact path="/" component={PokemonList} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/pokemons" component={PokemonList} />
          <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit}/>
          <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
          <PrivateRoute component={PageNotFound}/>

        </Switch>
      </div>
    </Router>
  );
};

export default App;