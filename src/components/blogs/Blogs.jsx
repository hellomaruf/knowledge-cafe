import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

function Blogs({handleAddToBookmarks}) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      let res = await fetch("blogs.json");
      let data = await res.json();
      setBlogs(data);
    };
    fetchBlog();
  }, []);
  // console.log(blogs);
  return (
    <div className=" md:w-2/3">
      
      {blogs.map((item, index) => (
        <Blog handleAddToBookmarks={handleAddToBookmarks}  blogs={item} key={index} />
      ))}
    </div>
  );
}

export default Blogs;
