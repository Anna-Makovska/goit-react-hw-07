import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact} from './contactsOps';
import { selectFilters } from './filtersSlice';
import { createSelector } from '@reduxjs/toolkit';



export const selectContacts = (state) => (state.contacts.items);
export const selectIsLoading = (state) => (state.contacts.isLoading);
export const selectError = (state) => (state.contacts.error);


export const selectVisibleContacts = createSelector([selectContacts, selectFilters], (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

}
  
);


const handlePending = (state) => {
  state.isLoading = true;

}

const handleRejected = (state, action) => {
  state.error = action.payload, 
  state.isLoading = false;

}

const slice = createSlice({
  name: 'contacts',
  initialState: {
      items: [],
      isLoading: false,
      error: null,
  },
  
  
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
  
});

export default slice.reducer;







