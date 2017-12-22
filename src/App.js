import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">
          <h2>Create your new app here!</h2>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
