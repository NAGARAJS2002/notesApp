import {BrowserRouter , Routes , Route} from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"

function App() {
  return (
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="dashboard" element={<Dashboard/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/sign-In" element={<SignIn/>} />
    
     </Routes>
     </BrowserRouter>
  )
}

export default App
