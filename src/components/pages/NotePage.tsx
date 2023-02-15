import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { FC, memo, useEffect, useState, useCallback } from "react";
import { useNoteHook } from "../../hooks/useNoteHook";
import { NoteCard } from "../organisms/NoteCard";
import { AddIcon } from "@chakra-ui/icons";
import { auth, db } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { NoteType } from "../../types/type";

export const NotePage: FC = memo(() => {
  const { notes, addNote, deleteNote, editUpNote, toggleModal, data } =
    useNoteHook();

  const sortedNotes = notes.sort((a, b) => b.date - a.date);

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
          {sortedNotes.map((note) => {
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
        {sortedNotes.map((note) => {
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
      </Box>
    </>
  );
});
