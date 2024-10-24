import {BrowserRouter , Routes , Route} from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import Profile from "./pages/Profile"
import Dashboard from "./components/Dashboard"
function App() {
  return (
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/sign-In" element={<SignIn/>} />
    <Route element={<PrivateRoute/>}>
     <Route path="/profile" element={<Profile/>}/ >
    </Route>
  <Route path="/dashboard" element={<Dashboard/>}/>
    
     </Routes>
     </BrowserRouter>
  )
}

export default App
