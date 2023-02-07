import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import { Header } from "../components/pages/Header";
import { LoginPage } from "../components/pages/LoginPage";
import { NotePage } from "../components/pages/NotePage";

export const NoteRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/note" element={<NotePage />} />
      </Route>
    </Routes>
  );
};
