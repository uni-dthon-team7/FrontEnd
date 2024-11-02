const BookmarkItem = ({ bookmark }) => {
  return (
    <div className="flex items-center bg-white rounded-md h-18 p-2 shadow-custom m-2 w-max">
      <div className="font-semibold text-base whitespace-nowrap ml-3 flex-grow">
        {bookmark.name}
      </div>
      <span className="text-sm mx-2 whitespace-nowrap">3일전</span>
      <img
        src={bookmark.image}
        alt={bookmark.name}
        className="w-14 h-14 rounded-lg m-1"
      />
    </div>
  );
};

export default BookmarkItem;
