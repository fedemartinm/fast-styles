import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  let mediaQueryList = null;
  if (typeof window !== "undefined") {
    mediaQueryList = window.matchMedia(query);
  }
  const [matches, setMatches] = useState(mediaQueryList?.matches);

  useEffect(() => {
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQueryList?.addEventListener("change", handleChange);

    return () => {
      mediaQueryList?.removeEventListener("change", handleChange);
    };
  }, [mediaQueryList]);

  return matches;
};

export default useMediaQuery;
