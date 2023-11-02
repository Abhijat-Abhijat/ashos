import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Download from "./components/Download";
import Commnunity from "./components/Community";
import Docs from "./components/Docs";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/community" element={<Commnunity />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
