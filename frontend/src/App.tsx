import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useAppContext } from "./contexts/AppContext";
import RootLayout from "./layouts/RootLayout";
import AddHotel from "./pages/AddHotel";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {
  const { isLoggedIn } = useAppContext();
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
        {isLoggedIn && (
          <>
            <Route
              path="/add-hotel"
              element={
                <RootLayout>
                  <AddHotel />
                </RootLayout>
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
