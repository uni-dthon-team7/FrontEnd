import { useEffect, useState } from "react";
import axios from "axios";
import BookmarkItem from "./BookmarkItem";
import GrayCard from "./GrayCard";

const BookmarkCard = ({}) => {
  const bookmarks = [
    {
      name: "간계밥",
      timestamp: "2021-09-15",
      image:
        "https://i.namu.wiki/i/kGAmARqR7IpFIFDJql7OU55Pw_qcHXsb8yozxvgMM0GrjjNRvkGK97hjZ353Uw7qoybXGeMdOtlpaVSdl2lRjouWk9mEF0Cd26pMIteDGtV1PGhSN48Hbo6e31YtKVlz4Yx4MIQKBt54UQkWlmjfHOscP1642Oa-VW60hHg-ah8.webp",
    },
    {
      name: "최고의 안주 계란말이",
      timestamp: "2021-09-15",
      image:
        "https://i.namu.wiki/i/kGAmARqR7IpFIFDJql7OU55Pw_qcHXsb8yozxvgMM0GrjjNRvkGK97hjZ353Uw7qoybXGeMdOtlpaVSdl2lRjouWk9mEF0Cd26pMIteDGtV1PGhSN48Hbo6e31YtKVlz4Yx4MIQKBt54UQkWlmjfHOscP1642Oa-VW60hHg-ah8.webp",
    },
  ];

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await axios.get(
          "http://16.171.73.198:8080/users/1/bookmarks"
        );
        console.log("Bookmarks fetched:", response.data);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <GrayCard>
      <div className="flex overflow-x-scroll pb-1">
        {bookmarks.map((bookmark) => (
          <BookmarkItem bookmark={bookmark} />
        ))}
      </div>
    </GrayCard>
  );
};

export default BookmarkCard;
