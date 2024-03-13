import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

function Blogs() {
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
      <h2>Blogs {blogs.length}</h2>
      {blogs.map((item, index) => (
        <Blog blogs={item} key={index} />
      ))}
    </div>
  );
}

export default Blogs;
