// Once we exported some module features, we need to import.
// This can be done with the following syntax:
import { Circle } from "./circle.js";

/*
We need to pass the .js file extension, or we will get SyntaxError: Unexpected token
And in our html we need to include type="module" in the <script> element, to declare this script as a module. To import the main.js script, we use this:

<script type="module" src="main.js"></script>

The proper way to fix this is using Webpack.

To import several features use the import statement, followed by a comma-separated list of the features we want to import wrapped in curly braces.
import { Circle, AnotherClass, comeOtherFunction, aVariable } from "./circle.js"; 
*/

const c = new Circle(10);
c.draw();
