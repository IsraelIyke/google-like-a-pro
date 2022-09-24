import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Google from "./pages/Google";
import P404 from "./pages/404";
import GoogleGuide from "./pages/GoogleGuide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Google />} />
        <Route path="/guide" element={<GoogleGuide />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </Router>
  );
}

export default App;
