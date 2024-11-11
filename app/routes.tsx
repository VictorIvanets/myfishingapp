import { Route, Routes } from "react-router-native"
import LoadPage from "../pages/loadPage/LoadPage"
import LoginPage from "../pages/loginPage/loginpage"
import StartPage from "@/pages/StartPage/startpage"
import RegisterPage from "@/pages/registerPage/registerPage"

export const RoutesView = () => (
  <Routes>
    <Route path="/" element={<LoadPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/startpage" element={<StartPage />} />
  </Routes>
)
