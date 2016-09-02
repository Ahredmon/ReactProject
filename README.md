# Overview
  This Forum component uses ReactJS to render a modular element onto the webpage. The component is broken down into sub components to allow for reuse.
  The React component then communicates with the Express server using SuperAgent as an Ajax library. Express serves as our API server that uses routing to facilitate
  access to the Data Access Layer(DAL) on the Node.JS server environment. Our DAL communicates with a MongoDB that is stored on mlab.

# Technologies used in this application
  Bootstrap
  ReactJS
    - Super Agent (Ajax)
  Express
  NodeJS
    - MongoDB Driver
  MongoDB
# File Structure

  All components are stored in their respected folders in APP/DEV.
  All static web content is served from the APP/PUBLIC directory.

# Webpack Configuration

This webpack configuraiton looks for files in the *dev* directories and bundles them into their respective files.
Each component has its own bundle.

*Babel precompiler is used to translate from ES6 into ES5. (Backwards Compatibility)
*Bundles are streamed from the Express server rather than stored on the physical disk.

Future implimentations will abstract the configuration outside of the body of the applicaiton to allow for easy management.
