import React, {createContext, useContext, useReducer} from 'react';

export const initialState = {
  spawn: [],
};

export const reducer = (state, action) => {
  const newSpawn = (name) => {
    let incSpawn = Number.isFinite(
      Math.max(...state.spawn.map((thing) => thing[0])),
    )
      ? Math.max(...state.spawn.map((thing) => thing[0])) + 1
      : 0;
    state.spawn.push([incSpawn, name]);
    const arraySpawn = [...state.spawn];
    return state.spawn.length ? arraySpawn : [0, name];
  };

  const removeSpawn = (removed) => {
    const newArr = [...state.spawn];
    const del = [...state.spawn.map((thing) => thing[0])];
    removed = del.indexOf(removed);
    newArr.splice(removed, 1);
    return newArr.length ? newArr : [];
  };

  const removeKind = (name) => {
    const swSpawn = state.spawn.filter((thing) => !thing.includes(name));
    return swSpawn;
  };

  switch (action.type) {
    case 'KILL_SPAWN':
      return {
        spawn: [],
      };
    case 'NEW_SPAWN':
      return {
        spawn: newSpawn(action.name),
      };
    case 'REMOVE_SPAWN':
      return {
        spawn: removeSpawn(action.payload),
      };
    case 'REMOVE_NAME':
      return {
        spawn: removeKind(action.name),
      };
    default:
      return state;
  }
};

export const SpawnStateContext = createContext();

export const SpawnProvider = ({children}) => (
  <SpawnStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SpawnStateContext.Provider>
);

export const useSpawnArray = () => useContext(SpawnStateContext);
