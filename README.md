# Pokémon React App

This is a simple React application that utilizes the PokeAPI to display a list of Pokémon and their details.

## Deployed Link
- [Pokemon](https://pokemon-as0j2uxg2-saiteja-goli.vercel.app/)
 

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Credits](#credits)

## Features

- View a list of Pokémon
- Load more Pokémon dynamically
- View details of each Pokémon, including their image, types, weight, base experience, and stats

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Saiteja-Goli/Pokemon.git
    ```

2. Navigate into the project directory:
    ```bash
    cd pokemon
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- Navigate to the home page to view a list of Pokémon.
- Click on a Pokémon's name to view its details.

## Folder Structure

pokemon-react-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Home.js
│ │ ├── Navbar.js
│ │ ├── Pokemon.js
│ │ └── PokemonDetails.js
│ ├── App.js
│ └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md


## Dependencies

- [react](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [@chakra-ui/react](https://chakra-ui.com/)

## Credits

- Pokémon data fetched from [PokeAPI](https://pokeapi.co/)
- Built with [React](https://reactjs.org/)
- UI components styled with [Chakra UI](https://chakra-ui.com/)
