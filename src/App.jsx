import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
