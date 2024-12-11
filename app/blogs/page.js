"use client";

import BlogCard from "./components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "@/store/blogSlicer";

export default function Blogs() {
  const dispatch = useDispatch();
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      dispatch(setBlogs({ blogs: data }));
    });

  const searchResult = useSelector((state) => state.blogs.searchResult);

  const blogs = useSelector((state) => {
    return state.blogs.blogs;
  });

  const result = searchResult.length <= 0 ? blogs : searchResult;
  return (
    <div className="container mt-4">
      {result.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.body}
            imageUrl="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
          />
        );
      })}
    </div>
  );
}
