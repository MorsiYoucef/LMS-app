const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver = {
  ...config.resolver,
  unstable_enableBridgeless: false, // Disable bridgeless mode
};

module.exports = config;