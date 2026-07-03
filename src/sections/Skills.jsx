import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { mySkills } from '../constants/index.js';

/**
 * Simple-icons SVGs (vercel, netlify, render, leetcode) ship as solid black.
 * We invert them to white so they're visible on dark cards.
 */
const INVERT_LOGOS = new Set([
  'vercel.svg',
  'netlify.svg',
  'render.svg',
  'leetcode.svg',
  'nextjs.svg',
]);

const needsInvert = (iconPath) => {
  if (!iconPath) return false;
  const file = iconPath.split('/').pop();
  return INVERT_LOGOS.has(file);
};

const Skills = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.skill-card',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
    );
  }, []);

  return (
    <section className="c-space my-20" id="skills">
      <h3 className="head-text">My Skills</h3>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {mySkills.map((category) => (
          <div key={`skill-${category.id}`} className="skill-card grid-container">
            {/* Category header */}
            <div className="flex items-center gap-3 mb-1">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: category.accent }} />
              <h4 className="grid-headtext" style={{ color: category.accent }}>{category.title}</h4>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-black-300 text-white-700 text-sm
                             transition-all duration-200 hover:scale-105 hover:brightness-125"
                  style={{ border: `1px solid ${category.accent}35` }}>
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4 object-contain flex-shrink-0"
                      style={needsInvert(skill.icon) ? { filter: 'invert(1) brightness(2)' } : {}}
                    />
                  )}
                  <span>{skill.name}</span>
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
