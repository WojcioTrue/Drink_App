# Drink_App
>Creating React Single-Page-Application with react-router-dom and redux.<br/>
> Live demo [_here_](https://glowing-seahorse-06bd04.netlify.app/?fbclid=IwAR0TzZNN-pJpbern-46PCNi9vPD2LWYVnJ4nc7A1e54flSGhGqVNNos588g).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)


## General Information
Main goal of making this is app was to Learn React, how hooks and state management work. 

After time application grew bigger, so technologies like Redux, React-Router-Dom and axios come in handy. 

After understanding and implementing this technologies, tests were written (and re-write some code for better testing ). 

There is a room for imporvement (list of comming changes in section (#room-for-improvement) )


## Technologies Used
- React
- JSX
- CSS
- Redux
- react-router-dom
- JEST
- react testing library (RTL)
- axios
- mock service worker
- TheCocktailDB API
- font-awesome
- framer-motion
- react-animated-numbers

## Features

Drink_App was created for:

- **Searching drink by name** <br/>
	Searchbar input field that fetch list of drinks with typed characters, displaying list of first 7 array elements from fetched drinks or less if there is not enough drinks.

- **Searching drink by category** <br/>
	Displaying drinks by 6 main categories.

- **Searching drink by ingredients** <br/>
	Searching drinks by ingredients selected in IngredientPrompt component. 
	Minium ammount of ingredients is 1. 
	Maximum ammount is 4.

- **List of Favourite drinks** <br/>
	After finding favourite drink, you can add it to your favourite list. In Mobile view you can display favourite drinks list by clicking button in right bottom position. In desktop view there is dedicated component visible with counter, displaying last 5 drinks added to list and button to display full list.

- **Drink details** <br/>
	Displaying information like: Name of drink, list of ingredients, preparation, type of glass. You can also add/remove drink from your favourite list from drink details view.

- **mobile friendly**
- **RWD**


## Screenshot
![alt text](/src/img/screen_shot.png)

## Setup
**How to install**<br/>
Download folders from 'dist' folder.
Copy them to your website project.
Add css href in `</head>` element e.g.

    <link rel="stylesheet" href="dist/css/style.css">
Add script before `</body>` tag and initiate e.g.

    <script src ="dist/js/particles.js"></script>
    <script>practiceInit();</script>

## Project Status
Project is: _in progress_


## Room for Improvement

Room for improvement:
- make particles float from different sides(top to bottom, left to right etc.)
- change shape of particle
- add feature to change z-index of particles


## Acknowledgements

- This project was inspired by select menu in game 'apex legends'