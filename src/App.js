import React, { Component,Fragment} from "react";
import renderRoutes from "@utils/renderRoutes";
import {baseConfigRoutes} from "@router";
import {Switch,Redirect} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
            <Redirect from="/" to="/home" exact/>
            {renderRoutes(baseConfigRoutes)}
          </Switch>
      </Fragment>
    )
  }
}

export default App;
