# 06- Webpack

## Install Webpack using Yarn

We are installing Webpack locally as a development dependency. Run the following command `yarn add webpack webpack-cli --dev`. This will install the latest version of Webpack (version `5.21.2` at the moment).

We are installing two packages:

1. webpack ---> Webpack it self
2. webpack-cli ---> Webpack Command Line Interface

## Directory structure

To use Webpack we should have the following folder structure.

```
project-root-folder
  |- package.json
  |- index.html
  |- /src
    |- index.js
```

The `index.js` file in the `/src` folder is where we have our JavaScript code, and where we import other modules.

## Webpack configuration

Since version 4, Webpack does not require a configuration file. But for complex projects one might be need. For this demonstration we will use a config file.

### Create config file

Create a webpack.config.js file in the root folder and webpack will automatically use it.

This is the standard configuration:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

## Run Webpack

To run Webpack, use the following command `yarn run webpack`. This will create a new folder for the bundle output of webpack `/dist/main.js`.

Then in our `index.html` we can use the file generate by Webpack, replacing the `<script>` tag with the following.

```html
<script src="dist/main.js"></script>
```

### Webpack script

We can add the script to run Webpack in the `package.json` file. Add the following script:

```
"build": "webpack --watch"
```

Adding the `--watch` flag will run Webpack every time we make a change to our files, and regenerates the bundle.