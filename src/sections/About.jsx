import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import ResumeModal from '../components/ResumeModal.jsx';

const About = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 26.3452, lng: 89.4482, altitude: 0.8 }, 3000);
    }
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* ---------- Bio ---------- */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/profile.jpeg" alt="Sayan Sarkar" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Sayan Sarkar</p>
              <p className="grid-subtext">
                4th-year Electronics &amp; Communication Engineering student at Coochbehar Government Engineering
                College (CGEC, 2023–2027). Full Stack MERN &amp; Next.js Developer with a solid foundation in Java, C,
                and Data Structures &amp; Algorithms — passionate about writing clean, efficient code and solving
                complex algorithmic problems.
              </p>
              <button
                onClick={() => setResumeOpen(true)}
                className="flex items-center gap-2 cursor-pointer text-yellow-500 py-4 hover:text-yellow-300 transition-colors">
                <p>View My Resume</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Tech Stack ---------- */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/techStack.jpeg" alt="Tech Stack" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                <strong className="text-white">Languages:</strong> C, Java, JavaScript, TypeScript, Arduino
                <br />
                <strong className="text-white">Frontend:</strong> React.js, Next.js (App Router), Tailwind CSS, Framer
                Motion, Bootstrap
                <br />
                <strong className="text-white">Backend:</strong> Node.js, Express.js, REST APIs, Firebase
                <br />
                <strong className="text-white">Databases:</strong> MongoDB, SQL
                <br />
                <strong className="text-white">DevOps:</strong> Git, GitHub, Docker, Vercel, Netlify, Render, AWS
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Globe / Location ---------- */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={1}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  { lat: 26.3452, lng: 89.4482, text: 'Coochbehar, West Bengal', color: 'white', size: 1.75 },
                ]}
                labelSize={(d) => d.size}
                labelColor={(d) => d.color}
                labelText={(d) => d.text}
              />
            </div>
            <div>
              <p className="grid-headtext">Based in Coochbehar, West Bengal — open to work worldwide</p>
              <p className="grid-subtext">
                Comfortable with remote collaboration across cities and flexible with relocation as needed.
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Passion for Coding ---------- */}
        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/typingKeyboard.webp" alt="Coding" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Solved 100+ DSA problems on LeetCode. Strong
                grasp of OOP principles, system design fundamentals, and modern full-stack tooling. Programming
                isn&apos;t just my profession — it&apos;s my passion.
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Tech-O-Nicks ---------- */}
        <div className="xl:col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/techonicks.png"
              alt="Tech-O-Nicks"
              className="w-full md:h-[326px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div>
              <p className="grid-headtext">Core Member — Tech-O-Nicks</p>
              <p className="grid-subtext">
                Core Team Member of Tech-O-Nicks, the official tech club of Coochbehar Government Engineering College.
                Also Co-lead of CGEC Doubthub — a tech platform designed to enhance students&apos; learning experience.
              </p>
              <a
                className="flex items-center gap-2 cursor-pointer text-yellow-500 mt-2"
                href="https://techonicks.vercel.app/"
                target="_blank"
                rel="noreferrer">
                <p>Tech-O-Nicks Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
