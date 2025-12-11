import React, {useState, useEffect} from 'react'
import styles from "../styles/ClubInfo.module.css";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 1000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    {showScrollButton && (
        <button
          onClick={scrollToTop}
          className={styles.scrollToTopButton}
          aria-label="Scroll to top"
        >
          <ArrowUp size={26} color="#fff" />
        </button>
      )}
    </>
      
    
  )
}

export default ScrollToTop