/** Keep optional review builds separate from a running development server. */
module.exports = {
  distDir: process.env.PORTFOLIO_DIST_DIR || ".next",
};
