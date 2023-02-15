export type NoteType = {
  id: string;
  title: string;
  text: string;
  modal: boolean;
  date: number;
};

export type DataType = {
  name: string;
  email: string;
  id: string;
  notes: Array<NoteType>;
};
