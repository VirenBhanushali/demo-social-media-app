import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";

function App() {
  const loggedIn = useSelector((val) => val.userSlice.loggedIn);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <LoginPage />}></Route>
          <Route
            path="/home"
            element={loggedIn ? <Home /> : <LoginPage />}
          ></Route>
          <Route path="/createPost" element={<CreatePost />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
