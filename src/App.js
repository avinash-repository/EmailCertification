import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';

import SignUp from './screens/SignUp';
import Myoffer from './screens/Myoffer';

import {
  BrowserRouter as Router , 
  Routes, 
  Route 
} from "react-router-dom";

function App() {
  return (
<Router>
  <div>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/myoffer" element={<Myoffer/>}/>
      

    </Routes>
  </div>
</Router>
  );
}

export default App;
