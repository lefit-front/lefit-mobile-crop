import babel from 'rollup-plugin-babel'

export default {
  input: './src/lefit-mobile-crop.js',
  output: {
    file: './dist/lefit-mobile-crop.min.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}