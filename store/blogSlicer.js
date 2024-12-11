const { createSlice } = require("@reduxjs/toolkit");

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    searchResult: [],
  },
  reducers: {
    setBlogs(state, action) {
      state.blogs = action.payload.blogs;
    },

    search(state, action) {
      state.searchResult = state.blogs.filter((blog) => {
        return blog.title
          .toLowerCase()
          .startsWith(action.payload.text.toLowerCase());
      });
    },
  },
});

export const { setBlogs, search } = blogsSlice.actions;
export default blogsSlice.reducer;
