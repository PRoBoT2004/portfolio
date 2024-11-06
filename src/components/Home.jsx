import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const heroHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroHeight / 2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-emerald-900 to-black">
      {/* Hero Section */}
      <section className={`relative transition-transform duration-700 ${isScrolled ? 'transform -translate-y-full' : ''}`} style={{ height: '100vh' }}>
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src="/src/assets/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex items-center justify-center h-full bg-black bg-opacity-60">
          <h1 className="text-6xl text-white animate-bounce neon-text">Welcome to Krishna's Portfolio</h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`pt-0 text-white text-center transition-opacity duration-700 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} style={{ height: '100vh' }}>
        <div className="flex flex-col w-full px-4 mx-auto md:flex-row max-w-7xl">

          {/* Left: Image */}
          <div className="flex justify-center mb-10 md:w-1/2 md:mb-0">
            <img
              src="/src/assets/pp.jpeg" // Update this path to your image
              alt="Krishna"
              className="w-3/4 mx-auto transition-transform duration-500 transform rounded-full shadow-lg hover:scale-105 neon-shadow"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center md:w-1/2 md:pl-10">
            <h2 className="mb-6 text-4xl font-bold text-shadow">About Me</h2>
            <p className="mb-4 text-lg">
              "I'm Krishna, a UI/UX developer passionate about creating intuitive and immersive digital experiences.
              With a background in web development, I aim to bridge creativity and technology, focusing on stunning visuals and seamless usability."
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="px-4 py-2 mt-6 font-bold transition duration-300 ease-in-out neon-button hover:bg-white hover:text-blue-500"
            >
              More
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 text-white text-center transition-opacity duration-700 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} style={{ height: '100vh' }}>
        <h2 className="mb-10 text-4xl font-bold text-shadow">Projects</h2>
        <div className="flex flex-col justify-center w-full gap-8 px-4 mx-auto md:flex-row max-w-7xl">

          {/* Project Card 1 */}
          <div
            onClick={() => onNavigate('projects')}
            className="relative h-64 overflow-hidden transition-transform duration-300 transform bg-black rounded-lg shadow-lg cursor-pointer w-72 neon-shadow hover:scale-105"
          >
            <img 
              src="/src/assets/clr.png" // Update this path to your project image
              alt="Project 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-xl font-semibold">Project 1</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
              <span className="text-sm font-medium">Go to project page for more information.</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div
            onClick={() => onNavigate('projects')}
            className="relative h-64 overflow-hidden transition-transform duration-300 transform bg-black rounded-lg shadow-lg cursor-pointer w-72 neon-shadow hover:scale-105"
          >
            <img 
              src="/src/assets/todo.jpg" // Update this path to your project image
              alt="Project 2"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-xl font-semibold">Project 2</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
              <span className="text-sm font-medium">Go to project page for more information.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className={`py-20 text-white text-center transition-opacity duration-700 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} style={{ height: '100vh' }}>
        <h2 className="mb-10 text-4xl font-bold text-shadow">Contact Me</h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg">Feel free to reach out for any inquiries!</p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>Email: <a href="mailto:your_email@example.com" className="hover:text-blue-400">your_email@example.com</a></span>
          </p>
          <p className="flex items-center">
            <FaPhone className="mr-2" />
            <span>Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a></span>
          </p>
          <p className="flex items-center">
            <FaLinkedin className="mr-2" />
            <span>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-400">linkedin.com/in/yourprofile</a></span>
          </p>
          <p className="flex items-center">
            <FaGithub className="mr-2" />
            <span>GitHub: <a href="https://github.com/yourprofile" className="hover:text-blue-400">github.com/yourprofile</a></span>
          </p>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-10 text-white bg-black neon-shadow">
        <div className="flex justify-between px-4 mx-auto max-w-7xl">
          {/* Left Side: Navigation Links */}
          <div className="flex flex-col space-y-2">
            <button onClick={() => onNavigate('home')} className="transition duration-300 hover:text-blue-400">Home</button>
            <button onClick={() => onNavigate('about')} className="transition duration-300 hover:text-blue-400">About</button>
            <button onClick={() => onNavigate('projects')} className="transition duration-300 hover:text-blue-400">Projects</button>
            <button onClick={() => onNavigate('contact')} className="transition duration-300 hover:text-blue-400">Contact</button>
          </div>

          {/* Right Side: Contact Details */}
          <div className="flex flex-col space-y-2 text-right">
            <h3 className="text-lg font-bold neon-text">Contact Me</h3>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" />
              Email: <a href="mailto:your_email@example.com" className="hover:text-blue-400">your_email@example.com</a>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" />
              Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a>
            </p>
            <p className="flex items-center">
              <FaLinkedin className="mr-2" />
              LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-400">linkedin.com/in/yourprofile</a>
            </p>
            <p className="flex items-center">
              <FaGithub className="mr-2" />
              GitHub: <a href="https://github.com/yourprofile" className="hover:text-blue-400">github.com/yourprofile</a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p>© 2024 Krishna. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
