module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(18,57,12,1) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)',
      }
    },
  },
  plugins: [],
};
