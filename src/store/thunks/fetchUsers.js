import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get(`${process.env.REACT_APP_MISCELLANY_API_URI}/users`);

    await pause(1000);

    return response.data;
});

const pause = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve()}, time);
    });
};

export { fetchUsers };