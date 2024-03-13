import Bookmarks from "./bookmarks/Bookmarks";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className=" flex max-w-7xl mx-auto mt-4">
        <Blogs />
        <Bookmarks />
      </div>
    </div>
  );
}

export default App;
