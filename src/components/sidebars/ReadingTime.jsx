import { useEffect, useState } from "react";

function ReadingTime() {
 const [readingTime, setReadingTime] = useState(0);

 useEffect(() => {
  function getReadingTime(content) {
   const wordsPerMinute = 180;
   const textLength = content.trim().split(/\s+/g).length;
   const readingTime = Math.round(textLength / wordsPerMinute);
   return readingTime;
  }

  const content = document.querySelector("._content").textContent;
  const time = getReadingTime(content);
  setReadingTime(time);
 }, []);

 return (
  <>
   <span className="text-[16px]">
    Чтение <b id="read-time">{readingTime}</b> мин. ⌛
   </span>
  </>
 );
}

export default ReadingTime;
