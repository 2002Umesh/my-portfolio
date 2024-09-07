import React, { useEffect, useState } from "react";


const useScrollProgess = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgess = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerWidth;
      if (scrollHeight) {
        setCompletion(Number(currentProgess / scrollHeight).toFixed(2) * 100);
      }
    };

    //event
    window.addEventListener("scroll", updateScrollCompletion);
    //clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgess;
