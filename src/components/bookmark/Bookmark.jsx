function Bookmark({ bookmarkTitle }) {
  //   const [title] = bookmark;
  //   console.log(title);
  return (
    <div>
      <h1 className="font-semibold text-xl p-4 rounded-lg shadow-md bg-white my-6 text-gray-800">
        {bookmarkTitle}
      </h1>
    </div>
  );
}

export default Bookmark;
