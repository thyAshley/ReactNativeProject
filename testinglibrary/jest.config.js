module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["js", "ts", "tsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupTestFrameworkScriptFile: "./setupTests.ts",
  testMatch: ["**/*.test.ts"],
};
