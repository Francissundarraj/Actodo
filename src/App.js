import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/To do container";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";

function App() {

  const [users, setUsers] = useState([

    {
        username:"Francis",
        password:"Mike123"
    }

])




  return (
   
    <BrowserRouter future={{ v7_startTransition: true , v7_relativeSplatPath: true }}>
    <Routes>
      
      <Route path="/" element={ <Login newusers={users} newSets={setUsers}/>}></Route>
<Route path="/signup" element={ <Signup newusers={users} newSets={setUsers} />}></Route>
<Route path="/landing" element={<Landing/>}></Route>
    </Routes>

    
    </BrowserRouter>

  )
}

export default App;
