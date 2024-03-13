import { useState } from "react";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (blog) => {
    let newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  
  return (
    <div>
      <Header />
      <div className=" flex max-w-7xl mx-auto mt-4">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;
