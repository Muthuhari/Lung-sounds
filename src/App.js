import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./components/firebase/firebase";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp_Patients from "./components/SignUp_Patients";
import Patientsreg from "./components/Patientsreg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout";
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Patientsreg />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup-patient" element={<SignUp_Patients />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
