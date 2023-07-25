import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/form" element = {<Form/>} />
        <Route path="/edit" element = {<Edit/>} />
        <Route path="/about" element = {<About/>} />
      </Routes>
    </div>
  );
}

export default App;

