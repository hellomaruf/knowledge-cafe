import { useEffect } from "react";
import { useState } from "react";

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
    console.log(blogs);
  return <div></div>;
}

export default Blogs;
