const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  language: "vi",
};
const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
export const { changeLanguage } = translateSlice.actions;
export default translateSlice.reducer;
