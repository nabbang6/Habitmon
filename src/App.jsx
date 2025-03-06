import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import SignUpProfile from "./pages/SignUpProfile";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileSet from "./pages/ProfileSet";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import MissionNew from "./pages/MissionNew";
import HabitmonCreate from "./pages/HabitmonCreate";
import HabitmonConfirm from "./pages/HabitmonConfirm";
import { useState, createContext, useEffect } from "react";

export const UserStateContext = createContext();
export const CharacterStateContext = createContext();
export const HabitStateContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [characterInfo, setCharacterInfo] = useState(null);
  const [habitInfo, setHabitInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // navigate("/habitmonCreate");

    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) setUserInfo(JSON.parse(storedUser));

    const storedCharacter = localStorage.getItem("characterInfo");
    if (storedCharacter) setCharacterInfo(JSON.parse(storedCharacter));

    const storedHabit = localStorage.getItem("habitInfo");
    if (storedHabit) setHabitInfo(JSON.parse(storedHabit));
  }, []);

  return (
    <HabitStateContext.Provider value={{ habitInfo, setHabitInfo }}>
      <CharacterStateContext.Provider
        value={{ characterInfo, setCharacterInfo }}
      >
        <UserStateContext.Provider value={{ userInfo, setUserInfo }}>
          <Routes>
            <Route path="/habitmonCreate" element={<HabitmonCreate />} />
            <Route path="/habitmonConfirm" element={<HabitmonConfirm />} />
            <Route path="/signup-profile" element={<SignUpProfile />} />
            <Route path="/mission-new" element={<MissionNew />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profileset" element={<ProfileSet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
          </Routes>
        </UserStateContext.Provider>
      </CharacterStateContext.Provider>
    </HabitStateContext.Provider>
  );
}

export default App;
