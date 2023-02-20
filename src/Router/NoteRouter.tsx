import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import { Header } from "../components/pages/Header";
import { LoginPage } from "../components/pages/LoginPage";
import { NotePage } from "../components/pages/NotePage";
import { NoMatch } from "../components/pages/NoMatch";
import { HomePage } from "../components/pages/HomePage";

export const NoteRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/note" element={<NotePage />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
