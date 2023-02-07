import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  useDisclosure,
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
  const { isOpen, onClose } = useDisclosure();

  const onClick = () => {
    toggleModal(note.id);
  };

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
          </Box>
        </CardBody>
      </Card>

      <ModalNote
        onClose={onClose}
        isOpen={isOpen}
        deleteNote={deleteNote}
        editUpNote={editUpNote}
        note={note}
        toggleModal={toggleModal}
      />
    </>
  );
});
