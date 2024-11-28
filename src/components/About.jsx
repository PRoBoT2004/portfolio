import React, { useState } from 'react';

// Popup for Skillset
const SkillPopup = ({ skill, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-slate-900">
        <h2 className="mb-4 text-2xl font-bold">{skill.title}</h2>
        <p className="mb-4 text-lg">
          {skill.details}
        </p>
        <button onClick={onClose} className="px-4 py-2 text-white bg-blue-500 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

// Popup for Experience
const ExperiencePopup = ({ experience, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-slate-900">
        <h2 className="mb-4 text-2xl font-bold">{experience.title}</h2>
        <p className="mb-4 text-lg">{experience.description}</p>
        <p className="mb-4 text-md"><strong>What I Gained:</strong> {experience.gain}</p>
        <p className="mb-4 text-md"><strong>How I Made It:</strong> {experience.process}</p>
        <p className="mb-4 text-md"><strong>Links:</strong> <a href={experience.link} className="text-blue-500">{experience.link}</a></p>
        <button onClick={onClose} className="px-4 py-2 text-white bg-blue-500 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

const About = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [experiencePopupVisible, setExperiencePopupVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);

  const skills = [
    { title: 'React', icon: '⚛️', details: 'Used for building dynamic UIs in my projects like the Blog App.' },
    { title: 'Tailwind CSS', icon: '💻', details: 'Applied for rapid UI design in multiple projects, enhancing the overall aesthetic.' },
    { title: 'JavaScript', icon: '🚀', details: 'The primary programming language used across all projects for logic implementation.' },
    { title: 'UI/UX Design', icon: '🎨', details: 'Focused on user-centered designs, ensuring a smooth user journey in my applications.' },
    { title: 'Responsive Design', icon: '📱', details: 'Ensured that my applications are accessible on various devices and screen sizes.' },
    { title: 'Version Control (Git)', icon: '🔧', details: 'Utilized for maintaining project code and collaboration during development.' },
  ];

  const experiences = [
    {
      title: 'UI Design and Development in ONGO: PEER TO PEER RIDE SHARING',
      description: 'Developed and maintained a responsive mobile application, focusing on enhancing user experience through efficient and clean code.',
      gain: 'Gained hands-on experience in mobile app development and user-centered design principles.',
      process: 'Worked closely with stakeholders to gather requirements and iterated on designs based on user feedback.',
      link: 'https://github.com/chiraggavande/OnGo_prototype'
    },
    {
      title: 'Static Website for Final Year Project: TERRALIFE',
      description: 'Created a static website for a project called TERRALIFE using React and Tailwind CSS, and deployed it after completion.',
      gain: 'Learned about deploying web applications and optimizing static content for performance.',
      process: 'Utilized React for component-based architecture and Tailwind CSS for rapid styling.',
      link: 'https://github.com/PRoBoT2004/TerraLife.com'
    },
  ];

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
    setPopupVisible(true);
  };

  const handleExperienceClick = (experience) => {
    setActiveExperience(experience);
    setExperiencePopupVisible(true);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-emerald-900 to-black">
      {/* About Me Section */}
      <section className="py-20 text-center">
        <h2 className="mb-4 text-5xl font-bold neon-green">About Me</h2>
        <div className="max-w-4xl mx-auto text-xl leading-relaxed">
          <p className="mb-8">
            I'm Krishna, a UI/UX developer with a passion for crafting intuitive and immersive digital experiences. 
            With a strong background in web development, I strive to bridge the gap between creativity and technology. 
            My goal is to create interfaces that not only look stunning but also offer seamless usability.
          </p>
          <p className="mb-8">
            I have worked on multiple projects where I was responsible for both front-end development and design, 
            ensuring that the user journey is at the forefront of every decision. 
            I enjoy learning new technologies and applying them to solve real-world problems.
          </p>
        </div>

        {/* Image */}
        <div className="mt-12">
          <img
            src="./images/pp.jpeg" // Placeholder for the image
            alt="Krishna"
            className="w-48 h-48 mx-auto rounded-full shadow-lg hover:scale-105 neon-shadow"
          />
        </div>
      </section>

      {/* Skillset Section */}
      <section className="py-20">
        <h3 className="mb-10 text-4xl font-bold text-center neon-blue">Skillset</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map(skill => (
            <div
              key={skill.title}
              onClick={() => handleSkillClick(skill)} // Add click handler to open popup
              className="p-6 text-center transition-transform duration-300 bg-black rounded-lg shadow-lg cursor-pointer hover:scale-105 neon-shadow"
            >
              <span className="text-3xl">{skill.icon}</span>
              <p className="mt-4 text-xl font-semibold">{skill.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <h3 className="mb-10 text-4xl font-bold text-center neon-purple">Experience</h3>
        <div className="max-w-4xl mx-auto">
          {experiences.map(experience => (
            <div
              key={experience.title}
              onClick={() => handleExperienceClick(experience)} // Add click handler to open popup
              className="p-6 mb-8 transition-transform duration-300 bg-black rounded-lg shadow-lg cursor-pointer hover:scale-105 neon-shadow"
            >
              <h4 className="mb-2 text-2xl font-semibold">{experience.title}</h4>
              <p className="text-lg">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20">
        <h3 className="mb-10 text-4xl font-bold text-center neon-orange">Interests</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="p-6 text-center bg-black rounded-lg shadow-lg neon-shadow">
            <p className="text-xl font-semibold">🚀 Technology</p>
          </div>
          <div className="p-6 text-center bg-black rounded-lg shadow-lg neon-shadow">
            <p className="text-xl font-semibold">🎨 Design</p>
          </div>
          <div className="p-6 text-center bg-black rounded-lg shadow-lg neon-shadow">
            <p className="text-xl font-semibold">🌍 Nature</p>
          </div>
          <div className="p-6 text-center bg-black rounded-lg shadow-lg neon-shadow">
            <p className="text-xl font-semibold">📚 Learning</p>
          </div>
        </div>
      </section>

      {/* Popup for Skills */}
      {popupVisible && <SkillPopup skill={activeSkill} onClose={() => setPopupVisible(false)} />}
      {/* Popup for Experience */}
      {experiencePopupVisible && <ExperiencePopup experience={activeExperience} onClose={() => setExperiencePopupVisible(false)} />}

      {/* Footer */}
      <footer className="py-10 text-center">
        <p>© 2024 Krishna. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
