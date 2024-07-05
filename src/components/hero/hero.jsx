import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto text-purple-400 p-12 my-20">
      <div className="text-left w-1/2 space-y-5">
        <h1 className="text-4xl text-stone-200">Hi, I'm Nusrat</h1>
        <h2 className="text-6xl font-semibold">Web Developer</h2>
        <p className="text-stone-200">
        I am a recent graduate with a Bachelor's degree in Computer Science and Engineering from Daffodil International University. With a strong passion for web development and data science, I am dedicated to mastering new technologies and continually improving my coding skills. My goal is to become a proficient full-stack web developer and data scientist, securing a stable job that allows me to be independent and happy. I strive to be the best version of myself, constantly learning and growing to achieve professional excellence and personal fulfillment.
        </p>
        <div className="flex gap-5">
          {/* <a
            href="/cv.pdf" // Path to your CV file in the public folder
            download="My_CV.pdf" // Name of the downloaded file
            style={{
              display: "inline-block",
              padding: "10px 20px",
              textDecoration: "none",
              color: "white",
              backgroundColor: "#007BFF",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            Download CV
          </a> */}
          <a
            href="/cv.pdf" // Path to your CV file in the public folder
            download="My_CV.pdf"
            className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700" />
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease" />
            <span className="relative text-white">Download CV</span>
          </a>

          <div className="rounded-full border border-stone-100 p-3">
            <a target="blank" href="https://github.com/Nusratbadhon1998">
              <FaGithub />
            </a>
          </div>
          <div className="rounded-full border border-stone-100 p-3">
            <a target="blank" href="https://github.com/Nusratbadhon1998">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-3xl rotate-6 hover:rotate-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 p-5">
        <img
          className="w-full h-96 -rotate-6 transition-transform duration-300 delay-150"
          src="https://www.sfu.ca/siat/student_projects/iat339/aumba/my-design-portfolio/img/vector-me.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
