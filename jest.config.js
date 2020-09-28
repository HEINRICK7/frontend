modules.exports = {
    roots: [
        '<rootDir>/rsc'
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts.tsx}'
    ],
    coverageDirectory: 'coverage',
    testEnviroment: 'node',
    tranform: {
        '.+\\.ts$': 'ts-jest'
    }
}