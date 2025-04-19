// Desc: Jest configuration file
module.exports = {
    // Test files
    testMatch: ['**/Specs/*.spec.js'],
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './Report', // represents the path to the report directory
                filename: 'report.html', // report file name
                pageTitle: 'SuperTest and Jest API Test Report', // report title
                overwrite: true, // overwrite existing file
                expand: true, // expands the report directory
            },
        ],
    ],
};