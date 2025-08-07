// ScrollToTop.jsx
import React,{ useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Run this whenever the pathname changes

  return null;
}

export default ScrollToTop;
