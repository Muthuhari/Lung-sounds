import Login from "./components/Login";
import Home from "./components/Home";
import DataInput from "./components/DataInput";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout";
import Footer from "./components/Footer";


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
          <Route path="/Footer" element={<Footer />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
 

    
  );
}


export default App;
