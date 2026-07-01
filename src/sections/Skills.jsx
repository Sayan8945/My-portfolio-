import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { mySkills } from '../constants/index.js';

const Skills = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.skill-card',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
    );
  }, []);

  return (
    <section className="c-space my-20" id="skills">
      <h3 className="head-text">My Skills</h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {mySkills.map((category) => (
          <div key={`skill-${category.id}`} className="skill-card grid-container">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: category.accent }} />
              <h4 className="grid-headtext mb-0">{category.title}</h4>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full px-4 py-2 bg-black-300 border border-black-500 text-white-700 text-sm transition-all hover:scale-105"
                  style={{ borderColor: `${category.accent}40` }}>
                  {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" />}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
