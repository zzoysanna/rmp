module.exports = {
    clearMocks: true,
    verbose: false,
    collectCoverage: true,
    setupFilesAfterEnv: [
        "<rootDir>/src/test-setup.js",
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};
