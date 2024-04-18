import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export let getRoutes = createAsyncThunk("getRoutes", async (id) => {
    let res = await axios.get("http://localhost:8000/getRoute?id=" + id);
    localStorage.setItem("userRoute", JSON.stringify(res.data.data));
    return res.data.data
})
let _localuserRoute = localStorage.getItem("userRoute")
let userSlice = createSlice({
    name: "userinfo",
    initialState: {
        userRoute: _localuserRoute ? JSON.parse(_localuserRoute) : []
    },
    reducers: {
        changeRoute (state, action) {
            state.userRoute = action.payload;
        }
    },
    extraReducers (chunk) {
        chunk.addCase(getRoutes.fulfilled, (state, action) => {
            state.userRoute = action.payload;
        })
    }
});
export let { changeRoute } = userSlice.actions;
export default userSlice.reducer;