import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://68500985e7c42cfd179713fe.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try { 
        const response = await axios.get("/contacts");
        return response.data;
    }
    catch (e) {
        console.error('Помилка запиту:', e);
        return thunkAPI.rejectWithValue(e.message);
        
   }
})


export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    
    try {
        const response = await axios.post("/contacts", newContact);
        return response.data;
    }
    catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
    }
})



export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})
