import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import ResumeModal from '../components/ResumeModal.jsx';
import GithubHeatmap from '../components/GithubHeatmap.jsx';
import GithubPinnedRepos from '../components/GithubPinnedRepos.jsx';

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

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

        {/* ---------- Bio ---------- */}
        <div className="grid-container xl:min-h-[560px] min-h-[500px]">
          <div className="w-full h-[240px] overflow-hidden rounded-lg">
            <img
              src="assets/profile.jpeg"
              alt="Sayan Sarkar"
              className="w-full h-full object-cover scale-105"
            />
          </div>
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

        {/* ---------- Tech Stack ---------- */}
        <div className="grid-container xl:min-h-[560px] min-h-[500px]">
          <img src="assets/techStack.jpeg" alt="Tech Stack" className="w-full h-[240px] object-contain" />
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

        {/* ---------- Globe / Location ---------- */}
        <div className="grid-container xl:min-h-[560px] min-h-[500px]">
          <div className="w-full h-[280px] flex justify-center items-center overflow-hidden pt-2 sm:pt-3">
            <Globe
              ref={globeRef}
              height={280}
              width={320}
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

        {/* ---------- Passion for Coding ---------- */}
        <div className="grid-container xl:col-span-2 xl:min-h-[380px] min-h-[380px]">
          <img src="assets/typingKeyboard.webp" alt="Coding" className="w-full h-[220px] object-contain" />
          <div>
            <p className="grid-headtext">My Passion for Coding</p>
            <p className="grid-subtext">
              I love solving problems and building things through code. Solved 100+ DSA problems on LeetCode. Strong
              grasp of OOP principles, system design fundamentals, and modern full-stack tooling. Programming
              isn&apos;t just my profession — it&apos;s my passion.
            </p>
          </div>
        </div>

        {/* ---------- Tech-O-Nicks ---------- */}
        <div className="grid-container xl:min-h-[380px] min-h-[380px]">
          <img
            src="assets/techonicks.png"
            alt="Tech-O-Nicks"
            className="w-full h-[220px] object-cover object-top rounded-lg"
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

        {/* ---------- GitHub Contributions ---------- */}
        <div className="grid-container xl:col-span-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <img src="/assets/logos/github.svg" alt="GitHub" className="w-6 h-6" />
              <p className="grid-headtext mb-0">GitHub Contributions</p>
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-yellow-500"
              href="https://github.com/Sayan8945"
              target="_blank"
              rel="noreferrer">
              <p>@Sayan8945</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <GithubHeatmap username="Sayan8945" />
        </div>

        {/* ---------- GitHub Pinned Repos ---------- */}
        <div className="grid-container xl:col-span-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <img src="/assets/logos/github.svg" alt="GitHub" className="w-6 h-6" />
              <p className="grid-headtext mb-0">Pinned Repositories</p>
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-yellow-500"
              href="https://github.com/Sayan8945?tab=repositories"
              target="_blank"
              rel="noreferrer">
              <p>View All Repos</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <GithubPinnedRepos username="Sayan8945" max={4} />
        </div>

      </div>
    </section>
  );
};

export default About;
