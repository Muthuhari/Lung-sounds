import Login from "./components/Login";
import Home from "./components/Home";
import DataInput from "./components/DataInput";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout";
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/DataInput" element={<DataInput />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
