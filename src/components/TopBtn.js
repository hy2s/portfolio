import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button id="top-btn"onClick={scrollToTop}>
        <FaAnglesUp />
        <p>TOP</p>
      </button>
    )
  );
};

export default TopBtn;