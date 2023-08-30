import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  status: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
    editContact(state, action: PayloadAction<Contact>) {
      const contactIndex = state.contacts.findIndex((contact) => contact.id === action.payload.id)
      if(contactIndex !== -1){
        state.contacts[contactIndex] = action.payload
      }
    },
    deleteContact(state, action: PayloadAction<string>) {
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload
      );
      if (contactIndex !== -1) {
        state.contacts.splice(contactIndex, 1);
      }
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
