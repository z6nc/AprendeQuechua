import { useRef, useState, useEffect, useCallback } from "react";

export const useScrollX = () =>{
    const scrollRef = useRef(null);
    const [postLeft, setPostLeft] = useState();
    const [postEnd, setPostEnd] = useState();

    useEffect(() => {
        const handleScroll = () => {
          if (scrollRef.current) {
            setPostLeft(scrollRef.current.scrollLeft);
            setPostEnd(
              scrollRef.current.scrollWidth -
                scrollRef.current.clientWidth -
                scrollRef.current.scrollLeft
            );
          }
        };
    
        scrollRef.current?.addEventListener("scroll", handleScroll);

        return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
      }, []);



       // move the scroll to the left
  const scrollLeft = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  }, []);


  // move the scroll to the right
  const scrollRight = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  }, []);

  return { scrollRef, postLeft, postEnd, scrollLeft, scrollRight };
}