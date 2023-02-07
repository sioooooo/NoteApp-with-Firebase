import { ChakraProvider, theme } from "@chakra-ui/react";
import { NoteRouter } from "./Router/NoteRouter";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NoteRouter />
    </ChakraProvider>
  );
}

export default App;
