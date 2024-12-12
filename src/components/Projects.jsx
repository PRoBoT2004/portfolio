import React, { useState } from 'react';

// Modal component for displaying project details
const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-11/12 max-w-lg p-6 bg-gray-900 rounded-lg shadow-lg max-h-[70vh] overflow-y-auto">
      
        <div className="text-white">
          <img src={project.image} alt={project.name} className="w-full mb-4 rounded" />
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="text-gray-400">Technologies: {project.technologies}</p>
          <p className="mb-4">{project.purpose}</p>

          <h4 className="text-xl font-semibold">How I Built It:</h4>
          <p>{project.howIBuiltIt}</p>

          {/* Display the brief in the "How I Built It" section */}
          <h4 className="mt-4 text-xl font-semibold">Project Brief:</h4>
          <p>{project.brief}</p>

          <div className="mt-4">
            <a href={project.githubLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
          <div>
            <a href={project.deploymentLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
          <button onClick={onClose} className="px-4 py-2 text-white bg-blue-500 rounded">
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project); // Set the selected project
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
    setSelectedProject(null); // Clear the selected project
  };

  // Project data, including brief for each project
  const projects = [
    {
      id: 1,
      name: 'OnGo Ride Sharing',
      image: 'https://t4.ftcdn.net/jpg/01/26/87/09/360_F_126870960_2daYXIfjxtDhLmkwsYQMo8xAA930ldQe.jpg',
      technologies: 'Figma , Flutter',
      purpose: 'A platform for ride sharing and carpooling.',
      howIBuiltIt: 'Created using Python and Flask for the backend, with React for the frontend.',
      brief: 'OnGo Ride Sharing was my final year project and also my best work. I designed and developed the UI for the mobile app and built the platform using Python and Flask for the backend and React for the frontend. It’s a ride-sharing platform aimed at improving the carpooling experience.',
      githubLink: 'https://github.com/chiraggavande/OnGo_prototype',
      deploymentLink: 'https://shorturl.at/FdPhG',
    },
   
    {
      id: 2,
      name: 'To-Do List',
      image: 'https://imgs.search.brave.com/Vx6z7Mg4liOXfb8w9zfl-bwS-MOX3q_fwAWZZFFIdXA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaW1hZ2lzdC9p/bWFnZS9mZXRjaC9x/X2F1dG8sZl9hdXRv/LGNfc2NhbGUsd18y/NjI0L2h0dHBzOi8v/dG9kb2lzdC5jb20v/c3RhdGljL2hvbWUt/dGVhbXMvaW50cm8v/bmFycm93L2hlYWRl/cnVpLmVuLnBuZw',
      technologies: 'React,Tailwind CSS',
      purpose: 'A simple task management app.',
      howIBuiltIt: 'Implemented with Node.js and Express for the backend.',
      brief: 'The To-Do List project was created to practice more advanced use of React hooks and Tailwind CSS. It includes a dark mode feature, showcasing my ability to implement user-friendly UI features and handle state management effectively.',
      githubLink: 'https://github.com/PRoBoT2004/task_manager',
      deploymentLink: 'https://probot2004.github.io/task_manager/',
    },
    {
      id: 3,
      name: 'Blog Site',
      image: 'https://firstsiteguide.com/wp-content/uploads/2020/11/what-is-a-blog-641x400-2-1.jpg',
      technologies: 'React , Tailwind CSS , API',
      purpose: 'A blogging platform for sharing thoughts and ideas.',
      howIBuiltIt: 'Built with Python and Flask framework for the backend.',
      brief: 'The Blog Site project focuses on API integration to fetch and display blog posts. It further showcases my skills in working with Flask for backend development and creating a responsive frontend.',
      githubLink: 'https://github.com/PRoBoT2004/blog',
      deploymentLink: 'https://probot2004.github.io/blog/',
    },
    {
      id: 4,
      name: 'Terralife',
      image: 'https://static.wixstatic.com/media/8932bd_7f30423e09614702baf4da658a8e3a20~mv2.jpg/v1/fill/w_486,h_486,al_c,q_90,enc_auto/TerraLiving%20Vertex%20Terrarium%20Desk%20Lifestyle.jpg',
      technologies: 'Figma',
      purpose: 'An application for managing and sharing terrarium designs.',
      howIBuiltIt: 'Developed with Python and Flask to serve the API.',
      brief: 'Terralife was a college project where I developed both the static website and the UI for the mobile app. The project helped enhance my skills in designing user interfaces and building web-based systems with Flask.',
      githubLink: 'https://github.com/chiraggavande/Terralife',
      deploymentLink: 'https://www.figma.com/design/9xFrAoC5jsDi8m7Yy8LU0T/TerraLife?node-id=0-1&t=Bc4wCmCPAPSdAlkN-1',
    },
    {
      id: 5,
      name: 'Color Changer',
      image: 'https://imgs.search.brave.com/CX--cTJekc_RjKg8gliJmysEgfSB0NfulhM8RWUJy48/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vzc2lvbnMuZWR1/L3dwLWNvbnRlbnQv/dGhlbWVzL2Rpdmkt/Y2hpbGQvY29sb3It/Y2FsY3VsYXRvci93/aGVlbC01LXJ5Yi5w/bmc', // Ensure the image path is correct
      technologies: 'React, Tailwind CSS',
      purpose: 'A tool to dynamically change colors in your web application.',
      howIBuiltIt: 'Used React for the frontend and CSS for styling.',
      brief: 'The Color Changer project demonstrates the implementation of React hooks, focusing on dynamically altering the colors across various web pages. This project highlights my understanding of state management in React and how hooks can be leveraged to create an interactive user experience.',
      githubLink: 'https://github.com/PRoBoT2004/color',
      deploymentLink: 'https://probot2004.github.io/color/',
    },
   
  ];

  return (
    <div className="min-h-screen py-20 text-white bg-gradient-to-br from-emerald-900 to-black">
      <h2 className="mb-10 text-4xl font-bold text-center">My Projects</h2>

      {/* Loop through the projects and display them as cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 transition-transform transform bg-black rounded-lg shadow-lg cursor-pointer neon-shadow hover:scale-105 w-72"
            onClick={() => handleCardClick(project)}
          >
            {/* Display the project image */}
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-48 mb-4 rounded"
            />
            {/* Show project name and technologies */}
            <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
            <p className="mb-1 text-sm text-gray-400">Technologies: {project.technologies}</p>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />
    </div>
  );
};

export default Projects;
