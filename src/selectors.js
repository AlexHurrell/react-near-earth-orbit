export const asteroids = (state) => {
    return state.asteroids;
  };
  
  export const asteroid = (id) => (state) => {
    if (!Object.keys(state.asteroids).length) return {};
  
    return state.asteroids[Object.keys(state.asteroids)[0]].filter(
      (asteroid) => asteroid.id === id
    )[0];
  };
  