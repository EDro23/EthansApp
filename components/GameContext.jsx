import React, { createContext, useState } from 'react';
import gameList from '../assets/games.json';  // Adjust path as needed

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameData, setGameData] = useState(gameList);

  return (
    <GameContext.Provider value={{ gameData, setGameData }}>
      {children}
    </GameContext.Provider>
  );
};
