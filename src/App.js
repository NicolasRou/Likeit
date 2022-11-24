import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Body/>
      </Router>
    </>
  );
}

export default App;
