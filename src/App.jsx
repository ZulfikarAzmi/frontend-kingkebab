import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
            </>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
      </Routes>
    
  );
}

export default App;
