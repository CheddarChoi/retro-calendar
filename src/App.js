import './App.css';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import MainPage from "./components/pages/MainPage.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
