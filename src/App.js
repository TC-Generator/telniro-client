import { Routes as Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
