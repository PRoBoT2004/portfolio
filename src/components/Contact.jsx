import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Here, you can implement the logic to send the email
    // For now, we'll simulate a successful submission
    setSuccessMessage('Your inquiry has been submitted successfully!');

    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-emerald-900 to-black">
      {/* Contact Section */}
      <section className="py-20 text-center">
        <h2 className="mb-4 text-4xl font-bold">Get in Touch</h2>
        <p className="max-w-2xl mx-auto mb-8">
          I would love to hear from you! Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out.
        </p>
        
        {/* Success and Error Messages */}
        {successMessage && <p className="text-green-400">{successMessage}</p>}
        {errorMessage && <p className="text-red-400">{errorMessage}</p>}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-md p-8 mx-auto bg-black rounded-lg shadow-lg neon-shadow">
          <div className="mb-4">
            <label className="block mb-2 text-left" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 text-white border rounded bg-slate-900 border-neon-green focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-left" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-white border rounded bg-slate-900 border-neon-green focus:outline-none"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-left" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 text-white border rounded bg-slate-900 border-neon-green focus:outline-none"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 text-white rounded-full bg-custom-gradient hover:bg-opacity-80 neon-shadow"
          >
            Send Message
          </button>
        </form>
      </section>
      
      {/* Footer */}
      <footer className="py-10 text-center text-white bg-black">
        <p>© 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
