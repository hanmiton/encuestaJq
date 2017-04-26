# Multi-Step Form Validation

This small application is to showcase how one could potentially do validation on a form that requires multiple steps.

It assumes that the default HTML5 validation needs to be overridden and/or polyfilled, so the `required` attribute is used, but validation is accomplished via jQuery.

It also assumes that all steps are loaded on a single page, and individual steps use show/hide functionality.

This example takes advantage of the `data-*` HTML5 attributes for storing the step information.

### Getting Started

You need nodeJS to run this example. In addition, you should have bower installed as well. If it is not, run `npm install bower -g` from the command line.

After cloning the repository, drop into the command line, go to the install directory, and run `npm install` to install the nodeJS application dependencies. Then go into the static folder and run `bower install` to install the bower components.

You can then run the server by typing `node server.js` from the root of the installation. The application can be view at http://localhost:3000.
