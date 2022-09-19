import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Google from "./pages/Google";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Google />} />
      </Routes>
    </Router>
  );
}

export default App;
