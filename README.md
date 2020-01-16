# Static Website Template

#### A simple template to conceptually demo the creation of a static website without the use of frameworks. Intended to serve as a teaching aid.

## How It Works

This template allows you to bundle HTML, CSS (SCSS), and JavaScript, and other static assets into a static website bundle, ready to be deployed to your server of choice.

#### Install Dependencies

This template leverages [Node.js](https://nodejs.org/) to handle all development and build tasks. You'll need to [install Node.js](https://nodejs.org/en/download/) prior to proceeding. It is suggested that you simply pick the `LTS` option.

#### Executing Scripts

All development and build scripts are executed through a utility called [NPM](). This utility comes bundled with Node.js. NPM also allows us install and manage open source plugins called `node modules`.

After cloning / downloading this project, it's important to open a terminal in the project's root directory and execute `npm install`. This command will install all dependencies required to develop or build the project and is only required once.

#### Build (Generate Static Assets)
```sh
$ npm install # Only needed the first time.
$ npm run build
```

#### Develop (Continuous Development Locally)
```sh
$ npm install # Only needed the first time.
$ npm start
```

## Template Structure

#### src/

#### dist/

#### README.md

#### package.json

#### package-lock.json

#### .gitignore

#### webpack.config.js

#### .babelrc

#### .eslintrc

#### .stylelintrc.json
