const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
const workspaceRoot = __dirname + "/../..";

const config = getDefaultConfig(projectRoot);

// Add monorepo support
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  projectRoot + "/node_modules",
  workspaceRoot + "/node_modules",
];
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
