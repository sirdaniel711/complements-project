# Complements Web Server Project (version 1.0)

JavaScript web server project for the Frontend Masters course [Intro to Web Development](https://bthold.github.io/intro-to-web-dev-v2/). <br />
It will show a random complement each time a button is clicked. <br />
This project has a front-end (index.html homepage with complements.js) and back-end (server.js). The server runs locally on "http://<i></i>localhost:3000".

Some extra notes:
- The npm was used to convert the project into a npm project (using npm init -y, requires Node.js to be installed).
    * This is needed to keep track of any dependencies added to the project.
    * This will generate the package.json file.
- The Express server framework was added as a dependency (using npm install express).
    * This dependency makes it easier to build a web app.
    * This will generate the node_modules folder.

## Directions
Note: Requires Node.js to be installed ([link to Node.js installer](https://nodejs.org/en/download/))
- First, copy all of the files from this project.
- Next, use a console to navigate to the files.
- Then, type "node server.js" to start the server. (the server will start to listen on port 3000)
- Last, open a browser and type in "http://<i></i>localhost:3000" into the navigator to open the homepage (index.html).

## Layout
- Front-End
    * index.html
    * complements.js 
- Back-End
    * server.js

## Description
- index.html
    * This is the default homepage that is displayed when a user navigates to "http://<i></i>localhost:3000" in a web browser.
    * It will display a random complement each time a button is pressed. The complement comes from the server (server.js).
    * Note: The server (server.js) has to be running first before a user can navigate to this homepage.
- complements.js
    * This file adds a listener to a button on the index.html homepage.
    * Once this button is clicked, it will request a random complement from the server (server.js). 
    * Then, it will add this complement to the index.html homepage to display it to the user.
- server.js
    * This is a server that represents an API.
    * Since it is a back-end, it requires Node.js to run outside of the browser.
    * Once it is running, it listens on port 3000. Then, a user can use the browser to navigate to it.
    * If a user navigates to the default path "http://<i></i>localhost:3000", then they will be routed to the homepage (index.html).
    * If a user (or file) navigates to the path "http://<i></i>localhost:3000/complement", then they will be given a random complement.

## To-Do List:
- Add an /insult endpoint that returns random insults to be hurled at your foes
- Use Parcel and PopMotion to animate the page
- Add some styling to the webpage using CSS
- Deploy to the cloud using a public host provider (such as Microsoft Azure)
