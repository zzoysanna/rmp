module.exports = {
    clearMocks: true,
    verbose: false,
    collectCoverage: true,
    setupFilesAfterEnv: [
        "<rootDir>/src/test-setup.js",
    ],
    modulePathIgnorePatterns: [
        "<rootDir>/cypress"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};
