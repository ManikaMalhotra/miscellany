import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('users/remove', async (user) => {
    const response = await axios.delete(`${process.env.REACT_APP_MISCELLANY_API_URI}/users/${user.id}`);

    return user;
});

export { removeUser };