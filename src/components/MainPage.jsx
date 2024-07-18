import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { IoMoon } from "react-icons/io5";
import Experience from "./Experience";
import {
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Project from "./Project";

const experiences = require("../info.json").experiences;
const projects = require("../info.json").projects;
const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [showGoToTopBtn, setShowGoToTopBtn] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY+100 > window.innerHeight && !showGoToTopBtn) {
        setShowGoToTopBtn(true);
      } else {
        setShowGoToTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="switch-theme absolute top-4 right-8 cursor-pointer">
        {theme === "light" ? (
          <IoMoon
            className="text-2xl text-black sm:text-3xl"
            onClick={() => {
              setTheme("dark");
            }}
          />
        ) : (
          <GoSun
            className="text-2xl text-white sm:text-3xl"
            onClick={() => {
              setTheme("light");
            }}
          />
        )}
      </div>
      {showGoToTopBtn && (
        <div
          className="fixed bottom-4 select-none right-4 text-2xl sm:bottom-10 sm:right-10 cursor-pointer sm:text-4xl transition-all ease-in-out duration-500 hover:bottom-16"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ☝️
        </div>
      )}
      <header className="fade-in text-lightgreyBg intro w-screen py-24 px-14  sm:px-36 sm:pt-40 sm:pb-28 dark:text-white">
        <h1 className="intro-hello text-3xl font-thin mb-5 sm:mb-7 sm:text-4xl ">
          {" "}
          Hi! 👋
        </h1>
        <h2 className="intro-body text-2xl py-10 sm:py-16 leading-9 sm:text-4xl sm:w-3/5 sm:leading-16">
          I&apos;m <span className="font-apercu">Rajesh Polarati</span>, a
          Full-stack developer with a focus on building scalable and efficient
          End to End web application. 👨‍💻
        </h2>
        <h3 className="contact-info text-lg py-14 sm:mt-0 sm:pt-0">
          Get in touch &nbsp; 👉 &nbsp;
          <a
            href={`mailto:"rajeshpolarati@gmail.com"`}
            className="custom-underline up px-1 py-1"
          >
            rajeshpolarati@gmail.com
          </a>
        </h3>
      </header>
      <section className="fade-in text-lightgreyBg section background w-full min-w-[320px] max-w-[1200px] mx-auto flex flex-col sm:px-0 sm:py-20 sm:max-w-[80%] sm:flex-row">
        <div className="background_heading uppercase px-8 font-apercu text-start text- sm:text-right text-violetBg sm:w-1/4">
          Background
        </div>
        <div className="background_text pt-7 pl-12 pr-2 sm:w-3/4 sm:pl-11 sm:pr-11 sm:pt-0 dark:text-darkgreyBg">
          <p className="mb-3">
            I&apos;m currently serving as a Full-stack engineer at{" "}
            <span className="font-apercu dark:text-white">Veltris</span> where I specialize in
            developing web applications across various domains.
          </p>
          <p className="mb-3">
            I enjoy bridging the gap between engineering and design — combining
            my technical knowledge with a keen eye for design to create
            beautiful, functional products. Whether working on backend
            infrastructure or frontend interfaces, my goal is always to build
            scalable and efficient applications that provide engaging,
            pixel-perfect user experiences.
          </p>
          <a className="status flex justify-start items-center">
            <div className="w-3 h-3 rounded-full bg-greenYellow animate-pulse-animation mr-4"></div>
            <div className="status_mesaage font-apercu dark:text-white">
              Currently seeking full-time opportunities!
            </div>
          </a>
        </div>
      </section>
      <section className="fade-in text-lightgreyBg section skills w-full min-w-[320px] max-w-[1200px] mx-auto mt-20 flex flex-col sm:px-0 sm:py-20 sm:max-w-[80%] sm:flex-row">
        <div className="skills_heading uppercase px-8 sm:pt-1 font-apercu text-start text-violetBg sm:text-right sm:w-1/4">
          Skills
        </div>
        <div className="skills_text flex flex-wrap justify-between pt-7 pl-12 pr-2 gap-6 sm:pl-11 sm:pr-11 sm:pt-0 dark:text-white leading-8 sm:w-3/4">
          <div className="skill_subsection flex flex-col min-w-32 dark:text-darkgreyBg">
            <h3 className="sub_sec_header_skill uppercase font-apercu dark:text-white">
              Languages
            </h3>
            <p>Javascript</p>
            <p>SQL</p>
            <p>No SQL</p>
            <p>Python</p>
            <p>Java</p>
          </div>
          <div className="skill_subsection flex flex-col min-w-32 dark:text-darkgreyBg">
            <h3 className="sub_sec_header_skill uppercase font-apercu dark:text-white">
              Frameworks
            </h3>
            <p>React.js</p>
            <p>Express.js</p>
            <p>Node.js</p>
            <p>Redux</p>
            <p>Tailwind</p>
          </div>
          <div className="skill_subsection flex flex-col min-w-32 dark:text-darkgreyBg">
            <h3 className="sub_sec_header_skill uppercase font-apercu dark:text-white">
              Databases
            </h3>
            <p>MSSQL</p>
            <p>MySQL</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>DynamoDB</p>
          </div>
          <div className="skill_subsection flex flex-col min-w-32 dark:text-darkgreyBg">
            <h3 className="sub_sec_header_skill uppercase font-apercu dark:text-white">
              Tools
            </h3>
            <p>AWS Medium Level</p>
            <p>Apache Kafka</p>
            <p>GIT</p>
            <p>Postman</p>
          </div>
        </div>
      </section>
      <section className="fade-in text-lightgreyBg section experience w-full min-w-[320px] max-w-[1200px] mx-auto mt-20 flex flex-col sm:px-0 sm:py-20 sm:max-w-[80%] sm:flex-row">
        <div className="exp_heading uppercase px-8  font-apercu text-start text-violetBg sm:text-right sm:w-1/4">
          Experience
        </div>
        <div className="exp_text flex flex-col pl-12 pr-2 pt-7 sm:pt-0 sm:w-3/4 sm:pl-11 sm:pr-11 dark:text-white">
          {experiences?.map((exp, index) => (
            <Experience {...exp} key={index} />
          ))}
          <div className="resume-link font-apercu mt-10">
            <a
              href={`${process.env.PUBLIC_URL}/Rajesh_Polarati_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex group transition-m items-center"
            >
              View My Resume{" "}
              <span>
                <FaArrowRight className="text-lg ml-2 ease-in-out duration-500 group-hover:ml-4 text-violetBg" />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="fade-in text-lightgreyBg section projects w-full min-w-[320px] max-w-[1200px] mx-auto mt-20 flex flex-col sm:px-0 sm:py-20 sm:max-w-[80%] sm:flex-row">
        <div className="project_heading uppercase px-8  font-apercu text-start text-violetBg sm:text-right sm:w-1/4">
          Projects
        </div>
        <div className="project_text flex flex-col pl-12 pr-2 pt-7 sm:pt-0 sm:w-3/4 sm:pl-11 sm:pr-11 dark:text-white">
          {projects?.map((exp, index) => (
            <Project {...exp} key={index} />
          ))}
        </div>
      </section>
      <footer className="footer flex flex-col py-10 sm:flex-row ">
        <div className="copy-rights dark:text-white text-sm flex justify-center items-center sm:w-1/2 ">
          ©Rajesh Polarati. All rights reserved
        </div>
        <div className="reach-me w-full text-violetBg flex justify-center items-center mt-3 sm:mt-0 sm:text-center sm:px-24 sm:w-1/2 sm:justify-end">
          <a
            href={`mailto:"rajeshpolarati@gmail.com"`}
            target="blank"
            className="uppercase font-apercu hidden sm:block mr-10 down"
          >
            Email
          </a>
          <a
            href={`https://www.linkedin.com/in/rajeshpolarati`}
            target="blank"
            className="uppercase font-apercu hidden sm:block mr-10 down"
          >
            LinkedIn
          </a>
          <a
            href={`https://github.com/rajeshpolarati`}
            target="blank"
            className="uppercase font-apercu hidden sm:block mr-10 down"
          >
            Github
          </a>
          <a
            href={`https://instagram.com/imrajeshpolarati`}
            target="blank"
            className="uppercase font-apercu hidden sm:block down"
          >
            Instagram
          </a>
          <a
            href={`mailto:"rajeshpolarati@gmail.com"`}
            target="blank"
            className="email_link sm:hidden mr-3"
          >
            <MdEmail className="text-3xl" />
          </a>
          <a
            href={`https://www.linkedin.com/in/rajeshpolarati`}
            target="blank"
            className="linkedin_link sm:hidden mr-3"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href={`https://github.com/rajeshpolarati`}
            target="blank"
            className="github_link sm:hidden mr-3"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href={`https://instagram.com/imrajeshpolarati`}
            target="blank"
            className="insta_link sm:hidden mr-3"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default MainPage;
