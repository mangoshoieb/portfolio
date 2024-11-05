/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // It's common to also include autoprefixer
  },
};

// Use CommonJS syntax
module.exports = config;
