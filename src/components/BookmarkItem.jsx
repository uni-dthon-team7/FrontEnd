const BookmarkItem = ({ bookmark }) => {
  return (
    <div className="flex items-center bg-white rounded-md h-18 p-2 shadow-custom m-2 w-full flex-nowrap">
      <div className="font-semibold text-base whitespace-nowrap ml-3">
        {bookmark.name}
      </div>
      <span className="text-sm mx-3 whitespace-nowrap text-[#ACACAC]">3일전</span>
      <div className="w-14 mr-2">
        <img
          src={bookmark.image}
          alt={bookmark.name}
          className="w-14 h-14 rounded-lg m-1 block"
        />
      </div>
    </div>
  );
};

export default BookmarkItem;
