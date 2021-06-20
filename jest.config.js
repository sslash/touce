const path = require('path')

module.exports = {
	preset: 'react-native',
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', './jestSetup.js'],
	moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
	moduleNameMapper: {
		'\\.(pdf|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
	},
}
