import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";
import Login from "./pages/login";
import MainLayout from "./layout/main-layout";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Overview />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
