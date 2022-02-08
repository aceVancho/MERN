import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { connectReduxDevtools } from 'mst-middlewares';
import './App.css';
import Login from "./Components/Login";
import { rootStore } from './Models/rootStore';

// Connect DEV TOOLS
const remotedev = require('remotedev');
connectReduxDevtools(remotedev, rootStore);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
