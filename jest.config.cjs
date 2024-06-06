module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/fileMock.ts",
    "@Components/(.*)$": "<rootDir>/src/components/$1",
    "@Pages/(.*)$": "<rootDir>/src/pages/$1",
    "@Services/(.*)$": "<rootDir>/src/services/$1",
  },
};
