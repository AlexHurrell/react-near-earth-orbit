import { ACTIONS } from "./actions";

export const initialState = {
    asteroids: {},
};

export function asteroidReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.RECEIVE_ASTEROIDS: {
            const asteroids = action.payload;

            return { ...state, asteroids: asteroids.near_earth_objects };
        }
        default:
            return state;
    }
}
