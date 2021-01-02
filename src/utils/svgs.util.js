// webpack feature: function mapping all *.svg paths to the actual data:image
export const reqSocialSvgs = require.context(
  '../images/social-icons',
  true,
  /\.svg$/
);

export const reqWebDevSvgs = require.context(
  '../images/webdev-icons',
  true,
  /\.svg$/
);
