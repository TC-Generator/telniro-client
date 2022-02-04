import { Routes as Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewOrder from "./pages/NewOrder";
import Orders from "./pages/Orders";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
// import Subcategories from "./pages/Subcategories";
import Questions from "./pages/Questions";
import Charge from "./pages/Charge";
import Notifications from "./pages/Nofitications";
import Notification from "./pages/Notification";
import Question from "./pages/Question";
import Transactions from "./pages/Transactions";
import { useEffect, useRef } from "react";

function App() {
  const AppRef = useRef();

  useEffect(() => {
    if (AppRef.current) {
      AppRef.current.focus();
    }
  }, [AppRef]);

  return (
    <div className="App" ref={AppRef} tabIndex="1">
      <Switch>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/new" element={<NewOrder />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/category/:id" element={<Blog />} />
          <Route path="/blog/post/:id" element={<BlogPost />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="statistics" element={<Statistics />} />
          {/* <Route path="subcategories" element={<Subcategories />} /> */}
          <Route path="notifications" element={<Notifications />} />
          <Route path="notifications/:id" element={<Notification />} />
          <Route path="questions" element={<Questions />} />
          <Route path="questions/:id" element={<Question />} />
          <Route path="charge" element={<Charge />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
