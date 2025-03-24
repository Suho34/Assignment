import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import User from "./components/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
