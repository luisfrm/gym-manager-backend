export default {
	testEnvironment: 'jest-environment-node',
	transform: {},
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
	moduleDirectories: ["node_modules", "src"],
	roots: ["<rootDir>/src"],
	coverageDirectory: "coverage",
	collectCoverageFrom: ["src/**/*.js"],
	coveragePathIgnorePatterns: ["/node_modules/", "/coverage/"],
};
