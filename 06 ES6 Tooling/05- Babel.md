# 05- Babel

## [Install NVM and Node.js](https://github.com/nvm-sh/nvm)

First we need to install **nvm** which is a version manager for **Node.js**. I installed it using [Homebrew package manager](https://formulae.brew.sh/formula/nvm) `brew install nvm`.

After installing **nvm**, we can install **Node.js** by running the following command `nvm install node`. This will install the latest version of **Node.js**

## [Install and use Yarn](https://yarnpkg.com/)

As the **Node.js** package manager I prefer to use **Yarn**, it can be installed as a **Node.js** package with the following command `npm install -g yarn`. This will install **Yarn** globally, for all projects.

Then Move into your project folder `cd ~/path/to/project`, and run `yarn set version latest`. This will install the latest version on this project.

Run `yarn init` in the project root folder to start a new project.

## Install Babel using Yarn

Now we can install Babel using **Yarn** with the following command `yarn add [package]`.

`yarn add @babel/cli @babel/core @babel/preset-env --dev`

1. **@babel/cli** ---> Babel Command Line Interface ---> Is the tool we run from teh command line which can be used to compile files from the command line.
2. **@babel/core** ---> It is basically the core of babel where all the logic for transpiling code is implemented.
3. **@babel/preset-env** ---> Its basically teh combination of all the babel plugin's, that allows you to use the latest JavaScript features

The `--dev` flag means this packages are going to be installed as development dependencies, and they will not be installed in the production environment.

Im am installing the latest version. To specify a version use `yarn add [package]@[version]`

## Babel CLI

Add the following script to the `package.json`
Create the `build` folder in the root of the project

```json
"scripts": {
    "babel": "babel index.js --presets=@babel/preset-env --out-file build/index.js"
  },
```

Then in the terminal run `yarn run babel`. This will transpile th `index.js` file to a new file in `build/index.js`.
