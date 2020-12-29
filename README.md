# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
I used also the library Axios to fetch data from the API just by personal choice since I have been using it in the browser and in Node but could have also used native fetch API of the browser.
I completed the requested requirements but I think some improvements can be made in the UI and the code to deliver a better user experience.

Any questions or comments, please let me know
## Instructions

Create .env file in the root folder with the following variables:
- REACT_APP_THEMOVIEDB_API_KEY= <<YOUR_MOVIEDB_API_KEY>>
- REACT_APP_DISCOVER_ENDPOINT=https://api.themoviedb.org/3/discover/movie
- REACT_APP_SEARCH_ENDPOINT=https://api.themoviedb.org/3/search/movie

Or simply replace those values in the config object located at '/src/config/config.js'

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Demo

Open [https://serene-joliot-9d96ac.netlify.app/]