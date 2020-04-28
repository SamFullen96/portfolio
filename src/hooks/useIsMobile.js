import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return isMobile;
};

export default useIsMobile;
