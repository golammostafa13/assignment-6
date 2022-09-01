import { patchLikeUnlikeApi } from "./llikeUnlikeApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const patchLikeUnlike = createAsyncThunk("likeUnlike/putData", async ({flag, id, data}) => {
    const likeUnlike = await patchLikeUnlikeApi(flag, id, data);
    return likeUnlike;
});


const likeUnlikeSlice = createSlice({
    name: "likeUnlike",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(patchLikeUnlike.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(patchLikeUnlike.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(patchLikeUnlike.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default likeUnlikeSlice.reducer;
