const path = require('path')

// to use @babel/core, vue-jest version is 4.0 or later.
module.exports = {
    rootDir: path.resolve(__dirname, '..'),
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,vue}'
    ],
    coverageDirectory: '<rootDir>/test/coverage',
    moduleFileExtensions: [
        'js',
        'vue'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest'
    },
    snapshotSerializers: [
        '<rootDir>/node_modules/jest-serializer-vue'
    ]
}
