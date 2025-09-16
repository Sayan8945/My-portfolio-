import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      // Target lat/lng
      const lat = 26.3452;
      const lng = 89.4482;

      // Fly camera to the point with zoom-in
      globeRef.current.pointOfView(
        { lat, lng, altitude: 0.8 }, // lower altitude = more zoom
        3000, // duration ms
      );
    }
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/profile.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m &nbsp;Sayan Sarkar</p>
              <p className="grid-subtext">
                A 3rd-year Electronics and Communication Engineering student at Cooch Behar Government Engineering
                College. Alongside my core engineering studies, I’m deeply passionate about coding, problem-solving, and
                exploring new technologies.
                <a
                  className="flex items-center gap-2 cursor-pointer text-yellow-500 py-4"
                  href="https://www.canva.com/design/DAGSmq_UtBs/CkEv_V5DlkIK4oyTKcmvJw/edit?utm_content=DAGSmq_UtBs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <p>View My Resume</p>
                  <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/techStack.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Proficient in a diverse range of technologies including Java, C, and Python for core programming; MERN
                stack (MongoDB, Express, React, Node.js) for full-stack web development; Data Structures & Algorithms
                (DSA) for problem-solving and optimization; and Data Science for insights, analytics, and AI-driven
                solutions.
              </p>
            </div>
          </div>
        </div>

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
                  { lat: 26.3452, lng: 89.4482, text: 'Coochbehar, West Bengal', color: 'white', focus, size: 1.75 },
                ]}
                labelSize={(d) => d.size}
                labelColor={(d) => d.color}
                labelText={(d) => d.text}
              />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m based in Coochbehar, West Bengal and open to work worldwide</p>
              <p className="grid-subtext">
                I’m comfortable coordinating across different cities and flexible with changing locations as needed.
              </p>
              {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/typingKeyboard.webp" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/techonicks.png"
              alt="grid-4"
              className="w-full md:h-[326px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div>
              <p className="grid-headtext">Tech-O-Nicks Core member</p>
              <p className="grid-subtext">
                Tech club Tech O Nicks offers a plethora of activities and events designed to ignite the passion for
                technology among our members. <br /> <br />
              </p>
              <a
                className="flex items-center gap-2 cursor-pointer text-yellow-500"
                href="https://techonicks.vercel.app/">
                <p>Tech-o-Nicks Site</p>
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
