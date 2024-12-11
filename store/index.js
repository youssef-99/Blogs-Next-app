const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "./authSlice";
import blogsReducer from "./blogSlicer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogsReducer,
  },
});

export default store;
