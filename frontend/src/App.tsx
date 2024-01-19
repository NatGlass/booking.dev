import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        <Route
          path="/register"
          element={
            <RootLayout>
              <Register />
            </RootLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
