// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const defaultConfig = await getDefaultConfig();
//   const { assetExts } = defaultConfig.resolver;
//   return {
//     // ...defaultConfig,
//     resolver: {
//       // Add bin to assetExts
//       assetExts: [...assetExts, 'bin'],
//     }
//   };
// })();

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  'json',
  'bin',
);

module.exports = config;