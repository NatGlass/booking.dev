import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

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
        <Route
          path="/sign-in"
          element={
            <RootLayout>
              <SignIn />
            </RootLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
