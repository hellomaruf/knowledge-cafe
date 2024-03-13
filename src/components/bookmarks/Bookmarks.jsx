import Bookmark from "../bookmark/Bookmark";

function Bookmarks({ bookmarks, readingTime }) {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 ml-8 bg-gray-100 p-6 rounded-xl">
      <h1 className="text-center p-4 bg-purple-200 mb-3 rounded-xl font-semibold text-purple-600">
        Spant time on reading {readingTime}
      </h1>
      <h2 className="text-center text-xl text-teal-800">
        Bookmarked Blogs {bookmarks.length}
      </h2>
      {bookmarks.map((items, i) => (
        <Bookmark
          readingTime={items.reading_time}
          bookmarkTitle={items.title}
          key={i}
        />
      ))}
    </div>
  );
}

export default Bookmarks;
