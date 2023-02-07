import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";

import { FC, memo } from "react";
import { NoteType } from "../../types/type";

type Props = {
  note: NoteType;
  deleteNote: (id: string) => void;
  editUpNote: (key: string, value: string, note: NoteType) => void;
  toggleModal: (id: string) => void;
};

export const ModalNote: FC<Props> = memo((props) => {
  const { note, deleteNote, editUpNote, toggleModal } = props;

  const onClick = () => {
    toggleModal(note.id);
  };

  return (
    <Modal isOpen={note.modal} onClose={onClick} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Input
            value={note.title}
            onChange={(e) => editUpNote("title", e.target.value, note)}
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            value={note.text}
            placeholder="text"
            onChange={(e) => editUpNote("text", e.target.value, note)}
            size="lg"
            minH="200px"
          />
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={() => deleteNote(note.id)}>
            削除
          </Button>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => toggleModal(note.id)}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
