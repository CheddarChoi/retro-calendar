import "./App.css";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import MainPage from "./components/pages/MainPage.js";
import LoginPage from "./components/pages/LoginPage.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
