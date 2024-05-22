import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Content from "./Components/Content";
import Songs from "./Components/Songs";

const App = () => {
  const [token, setToken] = useState('')
  console.log(token)
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/content" element={<Content />} />
          <Route path="/song/:id" element={<Songs token={token}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
