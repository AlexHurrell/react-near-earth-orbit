import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from '..';
import AsteroidsPage from '../pages/AsteroidsPage';
import { testPayload } from '../redux/actions';
import AsteroidPage from './AsteroidPage';

test('renders asteroids page', () => {
    render(<Provider store={store}><BrowserRouter><AsteroidsPage /></BrowserRouter></Provider>);
});

test('check number of asteroid cards', () => {
    render(<Provider store={store}><BrowserRouter><AsteroidsPage/></BrowserRouter></Provider>);

    const asteroidIds = Object.keys(testPayload.near_earth_objects)

    for (const asteroid of (testPayload.near_earth_objects[Object.keys(testPayload.near_earth_objects)[0]])) {
        const closeApproachDate = screen.getByTestId(asteroid.id)
        expect(closeApproachDate).toBeInTheDocument()
    }

});


