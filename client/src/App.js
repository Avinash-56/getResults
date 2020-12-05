import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Results from "./componets/Results";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Results}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
