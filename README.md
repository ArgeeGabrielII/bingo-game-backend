# BINGO GAME

Welcome to the Bingo Game Backend repository! This repository contains the backend code for a web-based Bingo game. The backend is responsible for managing the game logic, handling player actions, and maintaining game state.

## Introduction

The Bingo Game Backend is built to support a real-time multiplayer Bingo game. It handles the generation of Bingo cards, tracks the called numbers, and validates the player's actions to ensure a fair and smooth gaming experience. The backend is designed to be used in conjunction with a front-end application that interacts with these APIs.

![Site Map](https://github.com/ArgeeGabrielII/bingo-game-backend/blob/main/document/Site%20Map.png?raw=true)

![High Level Diagram](https://github.com/ArgeeGabrielII/bingo-game-backend/blob/main/document/High%20Level%20Diagram.png)

## Features

- Generate Bingo cards with random numbers.
- Support for multiple concurrent Bingo games.
- Real-time updates for players as the game progresses.
- Validate and process called numbers.
- Determine winning patterns and announce winners.

## Requirements
Before running the Bingo Game Backend, ensure you have the following installed:

- Node.js (at least version 18)
- npm (Node Package Manager)

## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/ArgeeGabrielII/bingo-game-backend.git
```

Navigate to the project directory:

```bash
cd bingo-game-backend
```

Install the required dependencies:

```bash
npm install
```

## API Endpoints

The backend exposes the following API endpoints for interaction:

- GET / : Health Check
- POST /create : Create new Bingo game
- GET /game/:id : Get the details of a specific Bingo game
- POST /generate-card : Generate a Bingo card
- POST /game/:id/join : Join an existing Bingo game
- POST /bingo-draw : Call a number during a game

## Contributing

We welcome contributions to improve the Bingo Game Backend! If you want to report bugs, suggest new features, or submit pull requests, please follow our contribution guidelines.

## License

This project is licensed under the MIT License, which means you are free to use, modify, and distribute the code as long as you include the original copyright notice.
