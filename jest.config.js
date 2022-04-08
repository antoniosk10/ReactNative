const esModules = ['react-icons', '@react-native', 'react-native'].join('|');

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  setupFiles: ['<rootDir>/jest/setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/jest/assetsTransformer.js',
  },
};
