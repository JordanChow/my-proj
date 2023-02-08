import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "scenes/homePage";
import ProfilePage from "scenes/profilePage";
import Navbar from "components/Navbar/Navbar";
import PostPage from "scenes/postPage";
import LoginPage from "scenes/loginPage";
import CreateAccountPage from "scenes/createAccountPage";
import WithoutNav from "routes/withoutNav";
import WithNav from "routes/withNav";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<CreateAccountPage />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/post/:postId" element={<PostPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
