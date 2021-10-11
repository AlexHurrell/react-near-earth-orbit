import { ACTIONS, testPayload } from "./actions";
import { asteroidReducer } from "./reducer";
import { asteroid } from "./selectors";

test('should return the initial state', () => {
    expect(asteroidReducer(undefined, {})).toEqual({
        asteroids: {},
    })
})

test('should add to state', () => {
    expect(JSON.stringify(asteroidReducer(undefined, {type: ACTIONS.RECEIVE_ASTEROIDS, payload: testPayload}))).toEqual(JSON.stringify({
        asteroids: testPayload.near_earth_objects
    }))

})