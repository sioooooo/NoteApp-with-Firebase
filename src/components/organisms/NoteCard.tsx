import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { NoteType } from "../../types/type";

import { ModalNote } from "./ModalNote";

type Props = {
  note: NoteType;
  deleteNote: (id: string) => void;
  editUpNote: (key: string, value: string, note: NoteType) => void;
  toggleModal: (id: string) => void;
};

export const NoteCard: FC<Props> = memo((props) => {
  const { note, deleteNote, editUpNote, toggleModal } = props;

  const onClick = () => {
    toggleModal(note.id);
  };

  const now = new Date(note.date);

  const time = now.toLocaleDateString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Card
        w={{ base: "90%", md: "300px" }}
        minH="100px"
        bg="white"
        borderRadius="10px"
        ml="20px"
        mb="20px"
        boxShadow="base"
        onClick={onClick}
      >
        <CardHeader>
          <Heading
            w="250px"
            h="39px"
            fontSize="2xl"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {note.title}
          </Heading>
        </CardHeader>

        <CardBody display={{ base: "none", md: "block" }}>
          <Box minH="50px" overflow="hidden" whiteSpace="pre-wrap">
            <Text textOverflow="ellipsis">{note.text}</Text>
            <Text>{time}</Text>
          </Box>
        </CardBody>
        <Box display={{ base: "block", md: "none" }}>
          <Text p={2}>{time}</Text>
        </Box>
      </Card>

      <ModalNote
        deleteNote={deleteNote}
        editUpNote={editUpNote}
        note={note}
        toggleModal={toggleModal}
      />
    </>
  );
});
