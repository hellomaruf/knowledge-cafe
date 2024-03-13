function Blog({ blogs }) {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blogs;
  console.log(blogs);
  return (
    <div className="my-10">
      <img className="w-full rounded-xl" src={cover} alt="" />
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-3">
          <div className="">
            <img className="w-16" src={author_img} alt="" />
          </div>
          <div className="">
            <h3 className="font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className=" text-xl text-gray-600">{reading_time} min read</p>
          <button>
            <i className="ri-bookmark-3-line font-bold text-2xl text-green-500"></i>
          </button>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-3xl text-gray-800">{title}</h1>
      </div>
      <div className="flex gap-2 py-3">
        {hashtags.map((items, i) => (
          <p key={i}>#{items}</p>
        ))}
      </div>
      <div className="">
        <button className="py-2 px-4 bg-yellow-400 rounded-lg">
          Mark as read
        </button>
      </div>
    </div>
  );
}

export default Blog;
