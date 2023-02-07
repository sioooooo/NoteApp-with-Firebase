import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { useNoteHook } from "../../hooks/useNoteHook";

import { NoteCard } from "../organisms/NoteCard";
import { AddIcon } from "@chakra-ui/icons";

export const NotePage: FC = memo(() => {
  const { notes, addNote, deleteNote, editUpNote, toggleModal } = useNoteHook();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* パソコン用表示　768px以上 */}
      <Box
        display={{ base: "none", md: "flex" }}
        flexWrap="wrap"
        w="100%"
        mt="20px"
      >
        <Box
          display={{ md: "flex" }}
          flexWrap="wrap"
          w="100%"
          justifyContent="center"
        >
          {notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                editUpNote={editUpNote}
                toggleModal={toggleModal}
              />
            );
          })}
          <Flex
            w="300px"
            minH="100px"
            align="center"
            justify="center"
            ml="20px"
          >
            <Button
              onClick={addNote}
              variant="ghost"
              borderRadius="50%"
              w="15px"
              h="40px"
            >
              <AddIcon boxSize={7} />
            </Button>
          </Flex>
        </Box>
      </Box>
      {/* スマートフォン用　 */}
      <Box display={{ md: "none" }}>
        {notes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              editUpNote={editUpNote}
              toggleModal={toggleModal}
            />
          );
        })}
        <Flex w={{ base: "100%" }} h="100px" align="center" justify="center">
          <IconButton
            onClick={addNote}
            variant="ghost"
            borderRadius="50%"
            w="15px"
            h="40px"
            aria-label="add-button"
            icon={<AddIcon boxSize={7} />}
          />
        </Flex>
      </Box>
    </>
  );
});
