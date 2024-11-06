import React from 'react';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="max-w-lg p-5 mx-auto text-black bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">{project.name}</h2>
        <img src={project.image} alt={project.name} className="mb-4 rounded" />
        <p className="mb-2"><strong>Technologies Used:</strong> {project.technologies}</p>
        <p className="mb-2"><strong>Project Brief:</strong> {project.purpose}</p>
        <p className="mb-2"><strong>How I Built It:</strong> {project.howIBuiltIt}</p>
        <div className="flex justify-between mt-4">
          <a href={project.githubLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <a href={project.deploymentLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
