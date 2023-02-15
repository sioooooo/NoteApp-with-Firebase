import { async } from "@firebase/util";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../firebase/firebase";
import { DataType, NoteType } from "../types/type";
export const useNoteHook = () => {
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const [data, setData] = useState<DataType>();

  const [userAuth] = useAuthState(auth);
  const navigate = useNavigate();
  const uid = userAuth?.uid;
  const usersCollection = collection(db, "users");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (userAuth) {
      const docRef = doc(usersCollection, uid);
      const unsub = onSnapshot(docRef, (doc) => {
        const newData = doc.data() as DataType;
        setData(newData);
        setNotes(newData.notes);
      });
    } else {
      navigate("/login");
    }
  };

  const storeNotes = (notes: Array<NoteType>) => {
    const newData = {
      ...data,
      notes: [...notes],
    };
    setDoc(doc(usersCollection, uid), newData);
  };

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
      storeNotes(newNotes);
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
      storeNotes(newNotes);
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
    getData,
    data,
  };
};
