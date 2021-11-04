import { Router, Switch, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import browserHistory from "./history";
import Header from "./components/Header/Header";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Header />
        <Switch>
          <Route component={Shop} exact path="/" />
          <Route component={Cart} exact path="/cart" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

// const RouterPage = (
//   props: { pageComponent: JSX.Element } & RouteComponentProps
// ) => props.pageComponent;
