import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage";
import { NoteRouter } from "./Router/NoteRouter";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NoteRouter />
    </ChakraProvider>
  );
}

export default App;
