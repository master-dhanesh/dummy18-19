import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [
        {
            id: 1,
            name: "John Doe",
            email: "user1@gmail.com",
            password: "password",
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "",
            password: "",
        },
        {
            id: 3,
            name: "John Smith",
            email: "",
            password: "",
        },
    ],
};

const UserSlice = createSlice({
    name: "user",
    initialState,
});

export default UserSlice.reducer;
