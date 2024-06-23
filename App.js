import { useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage.jsx";

function App() {
  useEffect(() => {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeIns.forEach((fadeIn) => {
      observer.observe(fadeIn);
    });
  }, []);
  return (
    <div className="app w-full dark:bg-nightBg font-aperculight">
      <MainPage />
    </div>
  );
}
export default App;
