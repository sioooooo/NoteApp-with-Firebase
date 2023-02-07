import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NoteType } from "../types/type";
export const useNoteHook = () => {
  const getItem = (key: string) => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return "";
  };

  const getNotes = getItem("notes");

  const initialState = JSON.parse(getNotes) as Array<NoteType>;

  const [notes, setNotes] = useState<Array<NoteType>>([]);

  useEffect(() => {
    setNotes(initialState);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = useCallback(() => {
    setNotes([
      ...notes,
      {
        id: uuidv4(),
        text: "",
        title: "",
        modal: true,
        date: Date.now(),
      },
    ]);
  }, [notes]);

  const deleteNote = useCallback(
    (id: string) => {
      const newNotes = notes.filter((note) => {
        return note.id !== id;
      });
      setNotes(newNotes);
    },
    [notes]
  );

  const editUpNote = useCallback(
    (key: string, value: string, note: NoteType) => {
      const newNote = {
        ...note,
        [key]: value,
      };
      const newNotes = notes.map((note) => {
        if (note.id === newNote.id) {
          // console.log(note.title.length);
          return newNote;
        } else {
          return note;
        }
      });
      setNotes(newNotes);
    },
    [notes]
  );

  const toggleModal = useCallback(
    (id: string) => {
      const newNotes = [...notes];

      const findNote = newNotes.find((note) => {
        return note.id === id;
      });
      if (!findNote?.title) {
        findNote!.title = "タイトル";
      }

      findNote!.date = Date.now();
      findNote!.modal = !findNote!.modal;

      setNotes(newNotes);
    },
    [notes]
  );

  return {
    deleteNote,
    addNote,
    notes,
    setNotes,
    editUpNote,
    toggleModal,
    getItem,
  };
};
