const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    author: "",
    pageNo: 1,
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
            state.author = "";
            state.search = "";
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
            state.author = "";
            state.tags = [];
        },
        setAuthor: (state, action) => {
            state.author = action.payload;
            state.tags = [];
            state.search = "";
        },
        selectedPageNo: (state, action) => {
            state.pageNo = action.payload;
        },
        reset: (state) => {
            state.tags = [];
            state.search = "";
            state.author = "";
        },
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, reset, setAuthor, selectedPageNo } = filterSlice.actions;
