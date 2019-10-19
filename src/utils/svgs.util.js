// webpack feature: function mapping all *.svg paths to the actual data:image
export const reqSvgs = require.context("../images/social-icons", true, /\.svg$/)