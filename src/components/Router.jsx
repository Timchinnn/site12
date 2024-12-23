import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import App from "../App";
import Signin from "./Signin/Signin";
import Forgotpassword from "./Forgotpassword/Forgotpassword";
import Reset from "./Reset/Reset";
import Register from "./Register/Register";
import ChooseRole from "./ChooseRole/ChooseRole";
import RoleFan from "./RoleFan/RoleFan";
import RoleFighter from "./RoleFighter/RoleFighter";
import Main from "./Main/Main";
import Tournament from "./Tournament/Tournament";
import AllTournaments from "./AllTournaments/AllTournaments";
import Voting from "./Voting/Voting";
import ProfileUser from "./ProfileUser/ProfileUser";
import ProfileFighterAcc from "./ProfileFighterAcc/ProfileFighterAcc";
import ProfileFighter from "./ProfileFighter/ProfileFighter";
import ProfileUserAcc from "./ProfileUserAcc/ProfileUserAcc";
import StatsFighter from "./StatsFighter/StatsFighter";
import PostPage from "./PostPage/PostPage";
import Notifications from "./Notifications/Notifications";
const Router = () => {
  const ProtectedSignin = () => {
    const userId = localStorage.getItem("userId");
    const userType = localStorage.getItem("userType");

    if (userId && userType) {
      return <Navigate to="/main" replace />;
    }

    return <Signin />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PostPage />} path="/post/:id" />
        <Route element={<ProtectedSignin />} path="" />
        <Route element={<Forgotpassword />} path="/forgotpassword" />
        <Route element={<Reset />} path="/Reset" />
        <Route element={<Register />} path="/register" />
        <Route element={<ChooseRole />} path="/chooserole" />
        <Route element={<RoleFan />} path="/rolefan" />
        <Route element={<RoleFighter />} path="/rolefighter" />
        <Route element={<Main />} path="/main" />
        <Route element={<Tournament />} path="/tournament" />
        <Route element={<AllTournaments />} path="/alltournaments" />
        <Route element={<Voting />} path="/Voting" />
        <Route element={<ProfileUser />} path="/profileuser" />
        <Route element={<ProfileFighterAcc />} path="/profilefighterAcc" />
        <Route element={<ProfileFighter />} path="/profilefighter" />
        <Route element={<ProfileUserAcc />} path="/profileuseracc" />
        <Route element={<StatsFighter />} path="/StatsFighter" />
        <Route element={<Notifications />} path="/Notifications" />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;