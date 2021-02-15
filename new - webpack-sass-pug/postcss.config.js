module.exports = {
  plugins: {
    "postcss-preset-env": {
      browsers: "last 2 versions",//autoprefixer
    },
    "rucksack-css": {
      autoprefixer: false
    },
    "postcss-combine-media-query": {},
    "postcss-extract-media-query": {
      extractAll: false,
      stats: false,
    },
    "cssnano": {},

  },
};
