# Forkify_project

Forkify_project

## Project Tutorial Babel - Related

Old Version compability

npm install --save-dev @babel/core @babel/preset-env
npm install --save @babel/polyfill


After that, in webpack.config.js ,  replace old entry with this

entry: ["@babel/polyfill", "./src/js/index.js"],


And finally, in .babelrc

{
  "presets": ["@babel/env"]
}

