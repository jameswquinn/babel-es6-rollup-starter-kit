import babel from 'rollup-plugin-babel';

export default {
  entry: 'app/index.js',
  format: 'iife',
  plugins: [ babel() ],
  dest: 'out/bundle.js'
};
