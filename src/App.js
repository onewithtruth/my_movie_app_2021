import React from "react";
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </HashRouter>
  )
}

export default App;