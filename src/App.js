import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;
