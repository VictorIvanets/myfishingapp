import { Route, Routes } from "react-router-native"
import LoadPage from "../pages/loadPage/LoadPage"
import LoginPage from "../pages/loginPage/loginpage"
import StartPage from "@/pages/StartPage/startpage"

export const RoutesView = () => (
  <Routes>
    <Route path="/" element={<LoadPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/startpage" element={<StartPage />} />
  </Routes>
)
